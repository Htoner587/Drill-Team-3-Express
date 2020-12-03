const Course = require("../models/course.model");

exports.index = (_req, res) => {
  Course.getAll((err, courses) => {
    if (err) {
      return res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employee.",
      });
    }

    res.render("index.html", { courses });
  });
};

exports.show = (_req, res) => {
    res.render('index.html');
};