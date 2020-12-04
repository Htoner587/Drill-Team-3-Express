var express = require('express');
var router = express.Router();

const courseController = require("../public/src/controllers/course.controller.js");

/* GET home page. */
router.get('/', courseController.index);

router.get('/course-info/:courseID', courseController.showCourse);

module.exports = router;
