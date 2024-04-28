const express = require('express');
const cors  = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
// const session = require('express-session');
const bodyParser = require('body-parser');
const endpoints = require('express-list-routes')



// routes
const authRoute = require('../src/routes/Auth/Auth.routes');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use(cookieParser());

app.use(helmet());

const prefix = '/api/v1'

// register route
app.use(prefix, authRoute);

console.log(endpoints(app))


module.exports = app;