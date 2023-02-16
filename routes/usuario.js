var express = require('express');
//Usuario que va a ir a iniciar sesion en el sistema
const
    {
        consultUser,
        registrarUsuario,
        inicioSesionUsuario,
        updateUser

    } = require('../controllers/controllerUsuario');

var router = express.Router();


//ruta para el servicio de usuario
router.get('/consultarUsuario',consultUser);
router.post('/registrarUsuario',registrarUsuario);
router.post('/inicioSesionUsuario',inicioSesionUsuario);
router.post('/actualizarUsuario',updateUser);


module.exports = router;