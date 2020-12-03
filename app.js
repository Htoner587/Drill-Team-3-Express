require("dotenv").config();

const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const path = require("path");
const session = require('express-session');

const app = express();

nunjucks.configure("public/src/views", {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, "public/src/views")));
app.set("view engine", "njk");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;