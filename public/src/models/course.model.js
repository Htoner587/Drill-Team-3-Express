const sql = require("../../../db.js");

const Course = function(course) {
  this.courseID = course.courseID;
  this.courseName = course.courseName;
};

Course.getAll = async () => {
  return await sql.query("SELECT * FROM course");
}

Course.createCourse = async (courseDetails) => {
  const query = "INSERT INTO course(title, courseDate, locationID, description, trainerNames, attendeesInfo, courseDuration)" + 
        "values(?, ?, ?, ?, ?, ?, ?);";

  const [title, date, loc, desc, names, info, duration] = Object.values(courseDetails);
  await sql.query(query, [title, date, parseInt(loc), desc, names, info, duration]);
}

module.exports = Course;