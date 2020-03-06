var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();
const sequelize = require('./app/models').sequelize;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
global.MISC = require(path.join(__dirname, '/app/helpers/misc'));
global.MSG = require(path.join(__dirname, '/app/helpers/message'));
require('./app/routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


app.use((req, res, next) => {
  sequelize
      .authenticate()
      .then(() => {
          // console.log('Connection has been established successfully.');
          // LOG.info('Connection has been established successfully.');
          next();
      })
      .catch(() => {
          return MISC.responses(res, {
              msg_status: 400,
              msg_success: false,
              msg_code: 'CONNECT_TO_DB_FAILED',
              msg_client: 'Gagal Menyambung ke Database'
          });
      });
});

module.exports = app;
