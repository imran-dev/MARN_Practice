const express               = require('express');
const router                = express.Router();
const HelloController       = require("../controllers/HelloController");
const StudentsController    = require("../controllers/StudentsController");
const JWTPractice           = require("../controllers/JWTPractice");
const TokenVerifyMiddleware = require("../middlewares/TokenVerifyMiddleware");
const TokenIssueController = require("../controllers/TokenIssueController");

// This is my first get and post routing
router.get("/hello-get", HelloController.Hello);
router.post("/hello-post", HelloController.Hello);


// Using Mongoose
// Apply JWT Auth
router.get("/TokenIssue", TokenIssueController.TokenIssue);

router.post("/InsertStudent", TokenVerifyMiddleware, StudentsController.InsertStudent);
router.get("/ReadStudent", TokenVerifyMiddleware, StudentsController.ReadStudent);
router.post("/UpdateStudent/:id", TokenVerifyMiddleware, StudentsController.UpdateStudent);
router.get("/DeleteStudent/:id", TokenVerifyMiddleware, StudentsController.DeleteStudent);

// Practice JWT
router.get("/CreateToken", JWTPractice.CreateToken);
router.get("/DecodeToken", JWTPractice.DecodeToken);

module.exports = router;