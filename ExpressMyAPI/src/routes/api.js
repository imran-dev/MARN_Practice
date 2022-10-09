const express            = require('express');
const router             = express.Router();
const HelloController    = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");

// This is my first get and post routing
router.get("/hello-get", HelloController.Hello);
router.post("/hello-post", HelloController.Hello);


// Using Mongoose
router.post("/InsertStudent", StudentsController.InsertStudent);
router.get("/ReadStudent", StudentsController.ReadStudent);
router.post("/UpdateStudent/:id", StudentsController.UpdateStudent);
router.get("/DeleteStudent/:id", StudentsController.DeleteStudent);


module.exports = router;