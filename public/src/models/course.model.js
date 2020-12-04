const sql = require("../../../db.js");

const Course = function(course) {
  this.courseID = course.courseID;
  this.courseName = course.courseName;
};

Course.getAll = async () => {
  return await sql.query("SELECT * FROM course");
}


module.exports = Course;