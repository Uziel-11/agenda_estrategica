var express = require('express');

const {filtroDatos} = require('../controllers/controllerFiltrado');

var router = express.Router();


//ruta para el directorio

router.post('/filtrarDatos', filtroDatos);


module.exports = router;