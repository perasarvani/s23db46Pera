var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{ useNewUrlParser: true,
useUnifiedTopology: true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var penRouter = require('./routes/pen');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');


var Pen = require("./models/pen");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pen', penRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource',resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start
 async function recreateDB(){
 // Delete everything
 await Pen.deleteMany();
 let instance1 = new
Pen({pen1:"Cello", pen2:'Reynolds',
pen_cost:15});
instance1.save().then(doc=>{
  console.log("First object saved");}
  ).catch(err=>{
  console.error(err);
  });
let instance2 = new
Pen({pen1:"Reynolds", pen2:'cello',
pen_cost:55});
instance2.save().then(doc=>{
  console.log("Second object saved");}
  ).catch(err=>{
  console.error(err);
  });
let instance3 = new
Pen({pen1:"Monster", pen2:'xcbn',
pen_cost:176});
instance3.save().then(doc=>{
  console.log("third object saved");}
  ).catch(err=>{
  console.error(err);
  });
 
 
  
}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;
