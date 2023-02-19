var express = require('express');

//ordendia
const
    {
        consultOrdenesDia,
        consultOrdenDiaPorId,
        consultOrdenDiaPorParametro,
        insertOrdenDia,
        deleteOrdenDia,
        updateOrdenDia

    } = require('../controllers/controllerOrdenDia');

//ordenDiaActividad
const
    {
            consultOrdenesDiaActividad,
            consultOrdenDiaActividadPorId,
            consultOrdenDiaActividadPorParametro,
            insertOrdenDiaActividad,
            deleteOrdenDiaActividad,
            updateOrdenDiaActividad

    } = require('../controllers/controllerOrdenDiaActividad');


//ordenDiaActUsuario
const
    {
        consultOrdenesDiaActUsuario,
        consultOrdenDiaActUsuarioPorId,
        consultOrdenDiaActUsuarioPorParametro,
        insertOrdenDiaActUsuario,
        deleteOrdenDiaActUsuario,
        updateOrdenDiaActUsuario

    } = require('../controllers/controllerOrdenDiaActUsuario');

//ordenDiaSeguiminento
const
    {
        consultOrdenesDiaActSeguimiento,
        consultOrdenDiaActSeguimientoPorId,
        consultOrdenDiaActSeguimientoPorParametro,
        insertOrdenDiaActSeguimiento,
        deleteOrdenDiaActSeguimiento,
        updateOrdenDiaActSeguimiento

    } = require('../controllers/controllerOrdenDiaActSeguimiento');

//ordenDiaActSeguimietnoArchivo
const
    {
        consultOrdenesDiaActSeguimientoArchivo,
        consultOrdenDiaActSeguimientoArchivoPorId,
        consultOrdenDiaActSeguimientoArchivoPorParametro,
        insertOrdenDiaActSeguimientoArchivo,
        deleteOrdenDiaActSeguimientoArchivo,
        updateOrdenDiaActSeguimientoArchivo

    } = require('../controllers/controllerOrdenDiaActSeguimientoArchivo');

//OrdenDiaDocumento
const
    {
        consultOrdenesDiaDocumento,
        consultOrdenDiaDocumentoPorId,
        consultOrdenDiaDocumentoPorParametro,
        insertOrdenDiaDocumento,
        deleteOrdenDiaDocumento,
        updateOrdenDiaDocumento

    } = require('../controllers/controllerOrdeDiaDocumento');


var router = express.Router();


//ruta para ordenDia
router.get('/consultOrdenesDia',consultOrdenesDia);
router.get('/consultOrdenDiaPorId',consultOrdenDiaPorId);
router.get('/consultOrdenDiaPorParametro',consultOrdenDiaPorParametro);
router.post('/insertOrdenDia',insertOrdenDia);
router.delete('/deleteOrdenDia',deleteOrdenDia);
router.put('/updateOrdenDia',updateOrdenDia);


//ruta para ordendia actividad
router.get('/consultOrdenesDiaActividad',consultOrdenesDiaActividad);
router.get('/consultOrdenDiaActividadPorId',consultOrdenDiaActividadPorId);
router.get('/consultOrdenDiaActividadPorParametro',consultOrdenDiaActividadPorParametro);
router.post('/insertOrdenDiaActividad',insertOrdenDiaActividad);
router.delete('/deleteOrdenDiaActividad',deleteOrdenDiaActividad);
router.put('/updateOrdenDiaActividad',updateOrdenDiaActividad);


//ruta para ordendia_actividades_usuario
router.get('/consultOrdenesDiaActUsuario',consultOrdenesDiaActUsuario);
router.get('/consultOrdenDiaActUsuarioPorId',consultOrdenDiaActUsuarioPorId);
router.get('/consultOrdenDiaActUsuarioPorParametro',consultOrdenDiaActUsuarioPorParametro);
router.post('/insertOrdenDiaActUsuario',insertOrdenDiaActUsuario);
router.delete('/deleteOrdenDiaActUsuario',deleteOrdenDiaActUsuario);
router.put('/updateOrdenDiaActUsuario',updateOrdenDiaActUsuario);

//ruta para ordendia_actividades_seguimiento
router.get('/consultOrdenesDiaActSeguimiento',consultOrdenesDiaActSeguimiento);
router.get('/consultOrdenDiaActSeguimientoPorId',consultOrdenDiaActSeguimientoPorId);
router.get('/consultOrdenDiaActSeguimientoPorParametro',consultOrdenDiaActSeguimientoPorParametro);
router.post('/insertOrdenDiaActSeguimiento',insertOrdenDiaActSeguimiento);
router.delete('/deleteOrdenDiaActSeguimiento',deleteOrdenDiaActSeguimiento);
router.put('/updateOrdenDiaActSeguimiento',updateOrdenDiaActSeguimiento);



//ruta para ordendia_actividad_seguimiento_archivo
router.get('/consultOrdenesDiaActSeguimientoArchivo',consultOrdenesDiaActSeguimientoArchivo);
router.get('/consultOrdenDiaActSeguimientoArchivoPorId',consultOrdenDiaActSeguimientoArchivoPorId);
router.get('/consultOrdenDiaActSeguimientoArchivoPorParametro',consultOrdenDiaActSeguimientoArchivoPorParametro);
router.post('/insertOrdenDiaActSeguimientoArchivo',insertOrdenDiaActSeguimientoArchivo);
router.delete('/deleteOrdenDiaActSeguimientoArchivo',deleteOrdenDiaActSeguimientoArchivo);
router.put('/updateOrdenDiaActSeguimientoArchivo',updateOrdenDiaActSeguimientoArchivo);


//ruta para ordendia documento
router.get('/consultOrdenesDiaDocumento',consultOrdenesDiaDocumento);
router.get('/consultOrdenDiaDocumentoPorId',consultOrdenDiaDocumentoPorId);
router.get('/consultOrdenDiaDocumentoPorParametro',consultOrdenDiaDocumentoPorParametro);
router.post('/insertOrdenDiaDocumento',insertOrdenDiaDocumento);
router.delete('/deleteOrdenDiaDocumento',deleteOrdenDiaDocumento);
router.put('/updateOrdenDiaDocumento',updateOrdenDiaDocumento);


module.exports = router;