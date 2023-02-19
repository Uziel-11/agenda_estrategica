var express = require('express');
var router = express.Router();

const {
    leerArchivos,
    crearArchivo,
    actualizarArchivo,
    eliminarArchivo
} = require('../controllers/controllerActividadComentarioArchivo');

router.post('/crearArchivo', crearArchivo);

router.put('/actualizarArchivo/:id', actualizarArchivo);

router.get('/leerArchivos', leerArchivos);

router.post('/eliminarArchivo/:id', eliminarArchivo)

module.exports = router;