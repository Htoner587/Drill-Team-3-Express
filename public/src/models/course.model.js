const sql = require("../../../db.js");

const Course = function(course) {
  this.courseID = course.courseID;
  this.courseName = course.courseName;
};

Course.getAll = async () => {
  return await sql.query("SELECT * FROM course");
}

Course.createCourse = async (courseDetails) => {
  var d = courseDetails.courseDate;
  d = d.split("-").reverse().join("/");
  courseDetails.courseDate = d;
  const query = "INSERT INTO course(courseName, courseDate, courseLocation, description, trainerNames, attendeesInfo, courseDuration)" + 
        "values(?, ?, ?, ?, ?, ?, ?);";

  await sql.query(query,Object.values(courseDetails));
}

module.exports = Course;