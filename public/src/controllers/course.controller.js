const Course = require("../models/course.model");

exports.index = async (_req, res) => {
  res.render('index.njk', { courses: await Course.getAll() })
};

exports.show = (_req, res) => {
    res.render('index.njk');
};

exports.showCourse = async (_req, res) => {
  let courseID = _req.params.courseID;
  let course = await Course.getByCourseID(courseID)
  console.log(course)
  res.render('course-info', { course });
};