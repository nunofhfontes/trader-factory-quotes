var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var quotesRouter = require('./routes/quote.route'); // Imports routes 

var app = express();

console.log("running app.js");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Loading the severall routers here, treat each url in the proper router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quotes', quotesRouter);


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

///////////////////////////////TESTING AREA/////////////////////////////////////////////////////
/*
const fs = require('fs');

//let rawdata = fs.readFileSync('./models/example3.json');  
//let example3 = JSON.parse(rawdata);  
//console.log(example3);  

console.log('This is before the read call');  

fs.readFile('./models/example3.json', (err, data) => {  
  if (err) throw err;
  let example3 = JSON.parse(data);
  console.log(example3);
});

console.log('This is after the read call');  
*/
////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = app;
