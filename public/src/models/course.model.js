const sql = require("../../../db.js");

const Course = function(course) {
  this.courseID = course.courseID;
  this.courseName = course.courseName;
};

Course.getAll = (result) => {
  sql.query(
    "SELECT * FROM course",
    (err, res) => {
      if (err) {
        console.log("error: ", err);

        result(null, err);

        return;
      }

      console.log("course: ", res);

      result(null, res);
    }
  );
};

module.exports = Course;