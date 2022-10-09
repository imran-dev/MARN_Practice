const StudentsModel = require('../models/StudentsModel');

exports.InsertStudent = (req, res) => {
    let reqBody = req.body;
    StudentsModel.create(reqBody, (error, data) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Success', data: data});
        }
    });
};

exports.ReadStudent = (req, res) => {
    let Query      = {};
    let Projection = 'Name Roll';
    StudentsModel.find(Query, Projection, (error, data) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Success', data: data});
        }
    });
};

exports.UpdateStudent = (req, res) => {
    let id      = req.params.id;
    let Query   = {_id: id};
    let reqBody = req.body;
    StudentsModel.updateOne(Query, reqBody, (error, data) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Success', data: data});
        }
    });
};

exports.DeleteStudent = (req, res) => {
    let id      = req.params.id;
    let Query   = {_id: id};
    StudentsModel.remove(Query, (error, data) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Success', data: data});
        }
    });
};