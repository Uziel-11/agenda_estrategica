var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var actividadRouter = require('./routes/actividad');
var actividadCometarioRouter = require('./routes/actividadComentario');
var actividadComentariosArchivoRouter = require('./routes/actividadComentarioArchivo');
var actividadInvitados = require('./routes/actividadInvitados');
var actividadPresencial = require('./routes/actividadPresencial');
var actividadVirtual = require('./routes/actividadVirtual')
var directorioRouter = require('./routes/directorio');
var ordenDiaRouter = require('./routes/ordenDia');
var usuarioRouter = require('./routes/usuario');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())



//servidor recibe la ruta

app.use('/', indexRouter);
app.use('/actividad', actividadRouter);
app.use('/actividadComentario', actividadCometarioRouter);
app.use('/actComentArchivo', actividadComentariosArchivoRouter);
app.use('/actividadInvitados', actividadInvitados);
app.use('/actividadPresencial', actividadPresencial);
app.use('/actividadVirtual', actividadVirtual);
app.use('/ordenDia', ordenDiaRouter);
app.use('/directorio',directorioRouter);
app.use('/usuario',usuarioRouter)




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

