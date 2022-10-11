const JWT = require('jsonwebtoken');

exports.CreateToken = (req, res) => {
    let Payload = {
        exp : Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            Name : "Imran Hossain",
            City : "Khulna",
            Admin: true
        }
    };

    let Token = JWT.sign(Payload, 'SicretKey123');
    res.send(Token);
}

exports.DecodeToken = (req, res) => {
    let Token = req.headers['token-key'];
    JWT.verify(Token, 'SicretKey123', function (err, decoded) {
        if (err) {
            res.status(401).json({status: 'Invalid Token', data: err});
        } else {
            res.status(200).json({status: 'Valid Token', data: decoded});
        }
    });
}