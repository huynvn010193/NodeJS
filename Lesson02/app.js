var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// User express layout
var expressLayouts = require('express-ejs-layouts');
// Connect MongoDB use mongoosejs
var mongoose = require('mongoose');

const systemConfig = require('./configs/system');
//const ItemModel = require('./schemas/items');

// TODO Code Connect MongoDB use mongoosejs
mongoose.connect('mongodb+srv://huynvn_123:01227679927@cluster0-zjdfb.gcp.mongodb.net/tranningNodeJS?retryWrites=true',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error',() => { console.log('error connection');
});
db.once('open',() => {
  console.log('connected');
});

// ItemModel.find({ }, (error,item) => {
//   console.log("error",error);
//   console.log("items",item);
// });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Local variable
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// TODO Set layout sử dụng 'express-ejs-layouts'
app.set('layout','backend');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// TODO Set up Router
app.use(`/${systemConfig.prefixAdmin}`,require('./routes/backend/index'));
app.use('/',require('./routes/frontend/index'));

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
  res.render('page/error',{ pageTitle: 'errorPage' });
});

module.exports = app;
