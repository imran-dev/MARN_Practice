const JWT          = require('jsonwebtoken');
const ProfileModel = require("../models/ProfileModel");


exports.CreateProfile = (req, res) => {
    let reqBody = req.body;
    ProfileModel.create(reqBody, (error, data) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Success', data: data});
        }
    });
}

exports.UserLogin = (req, res) => {
    let UserName = req.body['UserName'];
    let Password = req.body['Password'];
    ProfileModel.find({UserName: UserName, Password: Password}, (error, result) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            if (result.length === 1) {
                // Create Auth Token
                const Payload = {
                    exp : Math.floor(Date.now() / 1000) + (60 * 60),
                    data: result[0]
                };
                const Token   = JWT.sign(Payload, 'SicretKey123456');

                res.status(200).json({status: 'Success', token: Token, data: result[0]});
            } else {
                res.status(401).json({status: 'Unauthorized'});
            }
        }
    });
}

exports.SelectProfile = (req, res) => {
    let UserName = req.headers['username'];
    ProfileModel.find({UserName: UserName}, (error, result) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Success', data: result});
        }
    });
}

exports.UpdateProfile = (req, res) => {
    let UserName = req.headers['username'];
    let reqBody = req.body;

    ProfileModel.updateOne({UserName: UserName}, {$set:reqBody}, {upsert:true}, (error, result) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Update Success', data: result});
        }
    });
}