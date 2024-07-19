const express = require('express');
const authRoute = express.Router();
const multer = require('multer');
const upload = multer();

const AuthController = require('../../controllers/Auth/Auth.controller');
const AuthMiddleware = require('../../Middlewares/Auth.middleware');

const authController = new AuthController();
const authMiddleware = new AuthMiddleware();


// Bind the methods to the authController instance
const loginHandler = authController.login.bind(authController);
const registerHandler = authController.register.bind(authController);
const logoutHandler = authController.logout.bind(authController);
const activateHandler = authController.activate.bind(authController);
const refreshTokenHandler = authController.refreshToken.bind(authController);

// Use the bound methods as route handlers
authRoute.post('/auth/login', upload.none(), loginHandler);
authRoute.post('/auth/register', upload.none(), registerHandler);
authRoute.post('/auth/logout', upload.none(), logoutHandler);
authRoute.get('/auth/activate/token/:token', upload.none(), activateHandler);
authRoute.get('/auth/refresh/token', upload.none(), refreshTokenHandler);

module.exports = authRoute;
