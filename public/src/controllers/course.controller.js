const Course = require("../models/course.model");

exports.index = async (_req, res) => {
  res.render('index.njk', { courses: await Course.getAll() })
};

exports.createCourse = async (req, res) => {
  console.log('attempting to post a new course');

  try {
    console.log(req.body);
    await Course.createCourse(req.body);
    res.redirect('/');
  } catch (err) {
    res.locals.errormessage = `DB error: ${err}`;
    console.log(res.locals.errormessage);
    res.render('addcourse.njk', req.body);
  }
};

exports.showCreateCourse = (req, res) => {
    res.render('addcourse.njk');
};