var request = require('supertest');


describe('loading express', function () {
  var server;

  this.beforeAll(function (){
    server = require('./../app.js');
  })
  this.afterAll(function () {
    return process.exit();
  })
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('responds to course-info/1', function testCoursePage(done){
    request(server)
      .get('/course-info/1')
      .expect(200, done);
  });
  it('does not respond to course-info/200000000000', function testCourseInvalid(done){
    request(server)
      .get('/course-info/200000000000')
      .expect(404, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});