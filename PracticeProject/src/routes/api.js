const express = require('express');
const router  = express.Router();

const ProfileController    = require("../controllers/ProfileController");
const ToDoListController    = require("../controllers/ToDoListController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

router.post('/CreateProfile', ProfileController.CreateProfile);
router.post('/UserLogin', ProfileController.UserLogin);


router.get('/SelectProfile', AuthVerifyMiddleware, ProfileController.SelectProfile);
router.post('/UpdateProfile', AuthVerifyMiddleware, ProfileController.UpdateProfile);


router.post('/CreateToDo', AuthVerifyMiddleware, ToDoListController.CreateToDo);
router.get('/SelectToDo', AuthVerifyMiddleware, ToDoListController.SelectToDo);
router.post('/UpdateToDo', AuthVerifyMiddleware, ToDoListController.UpdateToDo);
router.post('/UpdateStatusToDo', AuthVerifyMiddleware, ToDoListController.UpdateStatusToDo);
router.post('/RemoveToDo', AuthVerifyMiddleware, ToDoListController.RemoveToDo);
router.get('/SelectToDoByStatus', AuthVerifyMiddleware, ToDoListController.SelectToDoByStatus);
router.get('/SelectToDoByDate', AuthVerifyMiddleware, ToDoListController.SelectToDoByDate);

module.exports = router;