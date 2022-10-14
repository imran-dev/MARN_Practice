const JWT      = require("jsonwebtoken");
module.exports = (req, res, next) => {
    let Token = req.headers['token-key'];
    JWT.verify(Token, 'SicretKey123456', function (err, decoded) {
        if (err) {
            res.status(401).json({status: 'Unauthorized', data: err});
        } else {
            // Get username from decoded token & add with request header
            req.headers.username = decoded['data']['UserName'];
            next();
        }
    });
}