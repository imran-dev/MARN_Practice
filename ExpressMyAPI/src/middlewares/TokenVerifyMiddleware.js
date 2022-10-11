const JWT      = require("jsonwebtoken");
module.exports = (req, res, next) => {
    let Token = req.headers['token-key'];
    JWT.verify(Token, 'SicretKey123', function (err, decoded) {
        if (err) {
            res.status(401).json({status: 'Invalid Token', data: err});
        } else {
            next();
        }
    });
}