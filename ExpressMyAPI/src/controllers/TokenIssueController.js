const JWT = require("jsonwebtoken");
exports.TokenIssue = (req, res) => {
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