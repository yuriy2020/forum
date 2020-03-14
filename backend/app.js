var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const FileStore = require("session-file-store")(session);

const cors = require('cors')

// Подключаем mongoose.
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://yuri:12341234@cluster0-hd6ks.azure.mongodb.net/forum?retryWrites=true&w=majority', 
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex:true});

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

var app = express();

// Session 
app.use(
  session({
    store: new FileStore(),
    key: "user_sid",
    secret: "someword",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000000
    }
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Подключаем статику 
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);

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

module.exports = app;
