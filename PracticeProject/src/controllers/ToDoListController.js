const ToDoListModel = require("../models/ToDoListModel");

exports.CreateToDo = (req, res) => {
    let postBody = {
        UserName       : req.headers['username'],
        ToDoSubject    : req.body['ToDoSubject'],
        ToDoDescription: req.body['ToDoDescription'],
        ToDoStatus     : 'New',
        ToDoCreateDate : Date.now(),
        ToDoUpdateDate : Date.now()
    }
    ToDoListModel.create(postBody, (error, data) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Success', data: data});
        }
    });
}

exports.SelectToDo = (req, res) => {
    let UserName = req.headers['username'];
    ToDoListModel.find({UserName: UserName}, (error, result) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Success', data: result});
        }
    });
}

exports.UpdateToDo = (req, res) => {
    let updateBody = {
        ToDoSubject    : req.body['ToDoSubject'],
        ToDoDescription: req.body['ToDoDescription'],
        ToDoUpdateDate : Date.now()
    }
    ToDoListModel.updateOne({_id: req.body['_id']}, {$set: updateBody}, {upsert:true}, (error, result) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Update Success', data: result});
        }
    });
}

exports.UpdateStatusToDo = (req, res) => {
    let updateBody = {
        ToDoStatus: req.body['ToDoStatus'],
        ToDoUpdateDate : Date.now()
    }
    ToDoListModel.updateOne({_id: req.body['_id']}, {$set: updateBody}, {upsert:true}, (error, result) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Update Success', data: result});
        }
    });
}

exports.RemoveToDo = (req, res) => {
    ToDoListModel.remove({_id: req.body['_id']}, (error, result) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Remove Success', data: result});
        }
    });
}

exports.SelectToDoByStatus = (req, res) => {
    let UserName = req.headers['username'];
    let ToDoStatus = req.query['status'];
    ToDoListModel.find({UserName: UserName, ToDoStatus: ToDoStatus}, (error, result) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Success', data: result});
        }
    });
}

exports.SelectToDoByDate = (req, res) => {
    let UserName = req.headers['username'];
    let FormDate = req.query['FormDate'];
    let ToDate = req.query['ToDate'];

    ToDoListModel.find({UserName: UserName, ToDoCreateDate: {$gte: new Date(FormDate), $lte: new Date(ToDate)}}, (error, result) => {
        if (error) {
            res.status(400).json({status: 'Fail', data: error});
        } else {
            res.status(200).json({status: 'Success', data: result});
        }
    });
}