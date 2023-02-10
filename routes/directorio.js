var express = require('express');

const
{
    consultDirectorio,
    consultDirectorioPorId,
    ConsultUserDirectorioPorParametro,
    insertUsuarioDirectorio,
    deleteUserDirectorio,
    updateUserDirectorio

} = require('../controllers/controllerDirectorio');

var router = express.Router();


//ruta para el directorio
router.get('/consultarUsuarios',consultDirectorio);
router.get('/consultarUsuario',consultDirectorioPorId);
router.get('/consultarUsuarioPorParametro',ConsultUserDirectorioPorParametro);
router.post('/agregarUsuario',insertUsuarioDirectorio);
router.delete('/eliminarUsuario',deleteUserDirectorio);
router.put('/actualizarUsuario',updateUserDirectorio);


module.exports = router;