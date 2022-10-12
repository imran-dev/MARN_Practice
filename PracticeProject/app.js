// Basic
const express    = require('express');
const router     = require('./src/routes/api');
const app        = new express();
const bodyParser = require('body-parser');

// Database Lib Import
const mongoose = require('mongoose');

// Security Middleware
const rateLimit     = require('express-rate-limit');
const helmet        = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss           = require('xss-clean');
const hpp           = require('hpp');
const cors          = require('cors');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser Implement
app.use(bodyParser.json());

// Request Rate Limit
const limiter = rateLimit({windowMs: 15 * 60 * 1000, max: 3000});
app.use(limiter);

// MongoDB Database Connection
let URI    = 'mongodb://localhost:27017/Todo';
let OPTION = {user: '', pass: ''};
mongoose.connect(URI, OPTION, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('DB Connection Success');
    }
});

// Routing Implement
app.use('/api/v1', router);

// Undefined route
app.use('*', (req, res) => {
    res.status(404).json({
        status: "Fail",
        data  : "Not Found"
    });
});


module.exports = app;