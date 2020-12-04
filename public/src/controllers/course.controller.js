const Course = require("../models/course.model");

exports.index = async (_req, res) => {
  res.render('index.njk', { courses: await Course.getAll() })
};

// exports.show = (_req, res) => {
//     res.render('index.njk');
// };


exports.show = (_req, res) => {
    res.render('addcourse.njk');
};