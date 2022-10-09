const StudentsModel = require('../models/StudentsModel');

exports.InsertStudent = (req, res) => {
    let reqBody = req.body;
    StudentsModel.create(reqBody, (error, data) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(201).json({status: 'Success', data: data});
        }
    });
}