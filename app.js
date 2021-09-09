// require("dotenv-safe").config();
// const jwt = require('jsonwebtoken');

const http = require('http');

let createError = require('http-errors');
let path = require('path');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let quotesRouter = require('./routes/quote.route'); // Imports routes
const authRoutes = require('./routes/auth');
const portfolioRoutes = require('./routes/portfolio');

var db = require('./db/datasource');

//creating Express app
const express = require('express');
const app = express();

//body parser to read JSON from request's 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(logger('dev'));

//setting HTTP Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

//Loading the severall routers here, treat each url in the proper router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quotes', quotesRouter);
app.use('/auth', authRoutes);
// app.use('/portfolio', portfolioRoutes);

//Centralized error handling - errors inside froutes/controllers will be thrown and caught here
app.use((error, req, res, next) => {
  console.log("Centralized error treatment:");
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

//consider exporting the Database class, instanciate it here, and try { instance.connect() } 
// db._connect();

//Build a server to intercept requests
const server = http.createServer(app); 
server.listen(3000);
console.log("Listening on port 3000...")

module.exports = app;
