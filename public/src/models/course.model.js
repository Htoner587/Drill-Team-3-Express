const sql = require("../../../db.js");

const Course = function(course) {
  this.courseID = course.courseID;
  this.courseName = course.courseName;
};

Course.getAll = async () => {
  return await sql.query("SELECT * FROM course");
}

courseByID = async (courseID) => {
  return await sql.query("SELECT * FROM course WHERE courseID = ?", [courseID])
}

Course.getByCourseID = async (courseID) => {
  resultCourse = await courseByID(courseID);
  console.log(resultCourse)
  return resultCourse[0];
};


// Course.getAll = (result) => {
//   sql.query(
//     "SELECT * FROM course",
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);

//         result(null, err);

//         return;
//       }

//       console.log("course: ", res);

//       result(null, res);
//     }
//   );
// };

module.exports = Course;