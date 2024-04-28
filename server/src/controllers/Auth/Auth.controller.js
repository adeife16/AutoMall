const bcrypt = require('bcrypt');
const joi = require('joi');
const { v4: uuidv4 } = require('uuid');
const AuthModel = require('../../models/Auth/Auth.model');
const UserModel = require('../../models/User/User.model');
const dotenv = require('dotenv');
const sendMail = require('../../modules/mailer');
const { signupTemplate } = require('../../modules/mail.template');
const { generateHash} = require('../../modules/hash');
const jwt = require('jsonwebtoken');

class AuthController {
  constructor() {
    this.authModel = new AuthModel(); //AuthModel instance
    this.userModel = new UserModel();

    //define validation schema
    this.loginSchema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().required()
    });
    this.registerSchema = joi.object({
      fName: joi.string().required(),
      lName: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().required().min(8),
      phone: joi.string().required().min(11).max(13)
    });
  }

  async login(req, res) {
    const { email, password } = req.body;

    const validationError = this.loginSchema.validate({ email, password }).error;

    if (validationError) {
      return res.status(400).json({
        message: validationError.message
      });
    }

    const user = await this.authModel.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        message: 'User not found'
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: 'Invalid password'
      });
    }

    if(user.status != 'Active'){
      return res.status(401).json({
        message: 'User account is not active'
      });
    }

    const userDetails = {
      userId: user.user_id,
      role: user.role
    }

    // Generate JWT token
    const accessToken = await this.generateAccessToken(userDetails);
    const refreshToken = await this.generateRefreshToken(userDetails);

   
    await this.authModel.removeToken(user.user_id);
    await this.authModel.createToken(user.user_id, refreshToken);

    res.setHeader('refresh', refreshToken);

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        user: userDetails,
        accessToken,
        refreshToken,
        message: "Logged in successfully",
      });
  }

  async register(req, res) {
    const { fName, lName, email, password, phone } = req.body;

    const validationError = this.registerSchema.validate({ fName, lName, email, password, phone }).error;
    if (validationError) {
      return res.status(400).json({
        message: validationError.message
      });
    }
    const checkUser = await this.authModel.findUserByEmail(email);

    const verifyToken = generateHash(Date.now()).slice(0,50);
    
    // if user exists
    if(checkUser !== null){
      if(checkUser.status === "Pending"){ //check if user status is pending
        const sendMailSuccess = await sendMail(email, "Activate Your Automall Account", signupTemplate(fName, verifyToken));
        
        // Resend activation mail with new token
        if(sendMailSuccess){
          this.authModel.updateToken(checkUser.user_id, verifyToken);
          return res.status(200).json({ "message": "User created Successfully"});
        }
        return res.status(500).json({ "message": "Error Sending Mail" });
      }
      else{
        return res.status(400).json({ "message": 'User already exists' });
      }
    }
    else{ //if user doesn't exists create new user
      const userId = uuidv4().replace(/-/g, '');
      const hashedPassword = await bcrypt.hash(password, 10);

      const userData = {
        user_id: userId,
        fname: fName,
        lname: lName,
        email: email,
        password: hashedPassword,
        phone: phone
      };

      const createUser = await this.authModel.createUser(userData);
      if (createUser) {
        const sendMailSuccess = await sendMail(email, "Activate Your Automall Account", signupTemplate(fName, verifyToken));

        if(sendMailSuccess){
          await this.authModel.createToken(userId, verifyToken);
          return res.status(200).json({
            message: 'User created successfully'
          });
        }
      }
      return res.status(500).json({
        message: 'Failed to create user'
      });
    }
  }

  async activate(req,res){
    const token = req.params.token;

    // check if token exists
    const user = await this.authModel.verifyToken(token);

    if(user){
      const activateUser = await this.userModel.activateUser(user.user_id);
      await this.authModel.removeToken(token);

      if(activateUser){
        return res.status(200).json({ "message": "User activated successfully" });
      }
      return res.status(500).json({ "message": "Failed to activate user" });
    }
    return res.status(400).json({ "message": "Invalid token" });
  }

  async authenticateToken(req, res, next, requiredRoles) {
    const token = req.header;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        // Check if requiredRoles is provided and if user's role is included
        if (requiredRoles && !requiredRoles.includes(decoded.role)) {
            return res.status(403).json({ message: 'Insufficient permissions' });
        }
        next();
    }
    catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
  }

  roleAuthenticator(requiredRoles) {
      return (req, res, next) => {
          this.authenticateToken(req, res, next, requiredRoles);
      };
  }

  async refreshToken(req, res) {
    try {
      const authHeader = req.headers['authorization'];
  
      if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header not found' });
      }
  
      const token = authHeader.split(' ')[1];
  
      if (!token) {
        return res.status(401).json({ message: 'Refresh token not provided' });
      }
  
      try {
        // Verify the refresh token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userDetails = decoded.user;

        const verify = await this.authModel.verifyToken(token);
        if(verify == null){
          return res.status(401).json({ message: 'Invalid refresh token' });
        }

        if(verify.user_id != userDetails.userId){
          return res.status(401).json({ message: 'Invalid refresh token' });
        }
  
        // Check if the refresh token is associated with a valid user
        const user = await this.userModel.getUserById(userDetails.userId);
        if (!user) {
          return res.status(401).json({ message: 'Invalid refresh token' });
        }
  
        // Generate a new access token
        const accessToken = await this.generateAccessToken(userDetails);
        const refreshToken = await this.generateRefreshToken(userDetails);
  
        await this.authModel.updateToken(userDetails.userId, refreshToken);

        // Send the new access token in the response
        res.setHeader('refresh', refreshToken);
  
        const options = {
          httpOnly: true,
          secure: true,
        };
  
        return res
          .status(200)
          .cookie("accessToken", accessToken, options)
          .cookie("refreshToken", refreshToken, options)
          .json({
            user: userDetails,
            accessToken,
            refreshToken,
            message: "Token Refreshed",
          });
      }
      catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
          return res.status(401).json({ message: 'Refresh token has expired' });
        } else if (error instanceof jwt.JsonWebTokenError) {
          return res.status(401).json({ message: 'Invalid refresh token' });
        } else {
          console.error('Error refreshing token:', error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      }
    }
    catch (error) {
      console.error('Error refreshing token:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  
  async generateAccessToken(user) {
    return jwt.sign({ user: user }, process.env.JWT_SECRET, { expiresIn: parseInt(process.env.JWT_EXPIRATION_ACCESS) });
  }

  // Function to generate refresh token
  async generateRefreshToken(user) {
      return jwt.sign({ user: user }, process.env.JWT_SECRET, {expiresIn: parseInt(process.env.JWT_EXPIRATION_REFRESH) });
  }
}

module.exports = AuthController;
