const bcrypt = require("bcrypt");
const joi = require("joi");
const { v4: uuidv4 } = require("uuid");
const AuthModel = require("../../models/Auth/Auth.model");
const UserModel = require("../../models/User/User.model");
const dotenv = require("dotenv");
const sendMail = require("../../modules/mailer");
const { signupTemplate } = require("../../modules/mail.template");
const { generateHash } = require("../../modules/hash");
const jwt = require("jsonwebtoken");

// Load environment variables
dotenv.config();

// Validation schemas
const loginSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().required(),
});

const registerSchema = joi.object({
	fname: joi.string().required(),
	lname: joi.string().required(),
	email: joi.string().email().required(),
	password: joi.string().min(8).required(),
	confirmPassword: joi.string().valid(joi.ref("password")).required(),
	agreement: joi.boolean().valid(true).required(),
});

class AuthController {
	constructor() {
		this.authModel = new AuthModel();
		this.userModel = new UserModel();
	}

	async login(req, res) {
		const { email, password } = req.body;

		const { error } = loginSchema.validate({ email, password });
		if (error) {
			return res.status(400).json({ message: error.message });
		}

		try {
			const user = await this.authModel.findUserByEmail(email);
			if (
				!user ||
				user.status !== "Active" ||
				!(await bcrypt.compare(password, user.password))
			) {
				return res
					.status(401)
					.json({ message: "Email or Password is incorrect" });
			}

			const userDetails = { userId: user.user_id, role: user.role };
			const accessToken = await this.generateAccessToken(userDetails);
			const refreshToken = await this.generateRefreshToken(userDetails);

      // geerate new refresh token
			await this.authModel.removeToken(user.user_id);
			await this.authModel.createToken(user.user_id, refreshToken);

			const options = { httpOnly: true, secure: true };

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
		} catch (error) {
			console.error("Error during login:", error);
			return res.status(500).json({ message: "Internal server error" });
		}
	}

	async register(req, res) {
		const { fname, lname, email, password, confirmPassword, agreement } =
			req.body;
		const { error } = registerSchema.validate({
			fname,
			lname,
			email,
			password,
			confirmPassword,
			agreement,
		});

		if (error) {
			return res.status(400).json({ message: error.message });
		}

		try {
			const checkUser = await this.authModel.findUserByEmail(email);
			const verifyToken = generateHash(Date.now()).slice(0, 50);

			if (checkUser) {
				if (checkUser.status === "Pending") {
					if (
						await this.sendActivationMail(
							email,
							fname,
							verifyToken,
							checkUser.user_id
						)
					) {
						return res
							.status(200)
							.json({
								message: "Activation mail resent successfully",
							});
					}
					return res
						.status(500)
						.json({ message: "Error sending mail" });
				}
				return res.status(400).json({ message: "User already exists" });
			}

			const userId = uuidv4().replace(/-/g, "");
			const hashedPassword = await bcrypt.hash(password, 10);
			const userData = {
				user_id: userId,
				first_name: fname,
				last_name: lname,
				email,
				password: hashedPassword,
			};

			if (await this.authModel.createUser(userData)) {
				if (
					await this.sendActivationMail(
						email,
						fname,
						verifyToken,
						userId
					)
				) {
					return res
						.status(200)
						.json({ message: "User created successfully" });
				}
			}
			return res.status(500).json({ message: "Failed to create user" });
		} catch (error) {
			console.error("Error during registration:", error);
			return res.status(500).json({ message: "Internal server error" });
		}
	}

	async activate(req, res) {
		const token = req.params.token;

		try {
			const verify = await this.authModel.verifyToken(token);

			if (verify && (await this.authModel.activateUser(verify.user_id))) {
				await this.authModel.removeToken(verify.user_id);
				return res
					.status(200)
					.json({ message: "Account activated successfully" });
			}
			return res.status(400).json({ message: "Invalid token" });
		} catch (error) {
			console.error("Error during account activation:", error);
			return res.status(500).json({ message: "Internal server error" });
		}
	}

	authenticateToken(req, res, next, requiredRoles) {
		const token = req.headers["authorization"];

		if (!token) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = decoded;

			if (requiredRoles && !requiredRoles.includes(decoded.role)) {
				return res
					.status(403)
					.json({ message: "Insufficient permissions" });
			}
			next();
		} catch (error) {
			console.error("Error authenticating token:", error);
			return res.status(403).json({ message: "Invalid token" });
		}
	}

	roleAuthenticator(requiredRoles) {
		return (req, res, next) => {
			this.authenticateToken(req, res, next, requiredRoles);
		};
	}

	async refreshToken(req, res) {
		const authHeader = req.headers["authorization"];

		if (!authHeader) {
			return res
				.status(401)
				.json({ message: "Authorization header not found" });
		}

		const token = authHeader.split(" ")[1];
		if (!token) {
			return res
				.status(401)
				.json({ message: "Refresh token not provided" });
		}

		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			const userDetails = decoded.user;

			const verify = await this.authModel.verifyToken(token);
			if (!verify || verify.user_id !== userDetails.userId) {
				return res
					.status(401)
					.json({ message: "Invalid refresh token" });
			}

			const user = await this.userModel.getUserById(userDetails.userId);
			if (!user) {
				return res
					.status(401)
					.json({ message: "Invalid refresh token" });
			}

			const accessToken = await this.generateAccessToken(userDetails);
			const refreshToken = await this.generateRefreshToken(userDetails);

			await this.authModel.updateToken(userDetails.userId, refreshToken);

			const options = { httpOnly: true, secure: true };

			return res
				.status(200)
				.cookie("accessToken", accessToken, options)
				.cookie("refreshToken", refreshToken, options)
				.json({
					user: userDetails,
					accessToken,
					refreshToken,
					message: "Token refreshed",
				});
		} catch (error) {
			console.error("Error refreshing token:", error);
			if (error instanceof jwt.TokenExpiredError) {
				return res
					.status(401)
					.json({ message: "Refresh token has expired" });
			} else if (error instanceof jwt.JsonWebTokenError) {
				return res
					.status(401)
					.json({ message: "Invalid refresh token" });
			} else {
				return res
					.status(500)
					.json({ message: "Internal server error" });
			}
		}
	}

	async generateAccessToken(user) {
		return jwt.sign({ user }, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_EXPIRATION_ACCESS,
		});
	}

	async generateRefreshToken(user) {
		return jwt.sign({ user }, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_EXPIRATION_REFRESH,
		});
	}

	async sendActivationMail(email, fname, token, userId) {
		try {
			const sendMailSuccess = await sendMail(
				email,
				"Activate Your Automall Account",
				signupTemplate(fname, token)
			);
			if (sendMailSuccess) {
				await this.authModel.createToken(userId, token);
			}
			return sendMailSuccess;
		} catch (error) {
			console.error("Error sending activation mail:", error);
			return false;
		}
	}
}

module.exports = AuthController;
