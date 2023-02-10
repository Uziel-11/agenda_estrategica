var express = require('express');

const
    {
        consultOrdenesDiaActividad,
        consultOrdenDiaActividadPorId,
        consultOrdenDiaActividadPorParametro,
        insertOrdenDiaActividad,
        deleteOrdenDiaActividad,
        updateOrdenDiaActividad

    } = require('../controllers/controllerOrdenDia');

var router = express.Router();


//ruta para el directorio
router.get('/consultOrdenesDiaActividad',consultOrdenesDiaActividad);
router.get('/consultOrdenDiaActividadPorId',consultOrdenDiaActividadPorId);
router.get('/consultOrdenDiaActividadPorParametro',consultOrdenDiaActividadPorParametro);
router.post('/insertOrdenDiaActividad',insertOrdenDiaActividad);
router.delete('/deleteOrdenDiaActividad',deleteOrdenDiaActividad);
router.put('/updateOrdenDiaActividad',updateOrdenDiaActividad);


module.exports = router;