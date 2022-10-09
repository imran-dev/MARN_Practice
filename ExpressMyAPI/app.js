const express = require('express');
const router  = require('./src/routes/api');
const app     = new express();

// Security Middleware Import
const rateLimit     = require('express-rate-limit');
const helmet        = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss           = require('xss-clean');
const hpp           = require('hpp');
const cors          = require('cors');
const mongoose      = require('mongoose');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Request Rate Limit
const limiter = rateLimit({
    windowMs       : 15 * 60 * 1000, // 15 minutes
    max            : 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders  : false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter);

// MongoDB Database Connection
let URI    = 'mongodb://localhost:27017/Schools';
let OPTION = {user: '', pass: ''};
mongoose.connect(URI, OPTION, (error) => {
    console.log('DB Status: Connection Success');
    console.log('DB Error: '+error);
});


app.use('/api/v1', router);


// Undefined route
app.use('*', (req, res) => {
    res.status(404).json({
        status: "Fail",
        data  : "Not Found"
    });
});

module.exports = app;