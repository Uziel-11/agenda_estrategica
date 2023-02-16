var express = require('express');

const
    {
        consultOrdenesDia,
        consultOrdenDiaPorId,
        consultOrdenDiaPorParametro,
        insertOrdenDia,
        deleteOrdenDia,
        updateOrdenDia

    } = require('../controllers/controllerOrdenDia');
const
    {
            consultOrdenesDiaActividad,
            consultOrdenDiaActividadPorId,
            consultOrdenDiaActividadPorParametro,
            insertOrdenDiaActividad,
            deleteOrdenDiaActividad,
            updateOrdenDiaActividad

    } = require('../controllers/controllerOrdenDiaActividad');


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

module.exports = router;