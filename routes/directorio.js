var express = require('express');

const
{
    consultDirectorio,
    consultDirectorioPorId,
    filtroUsuarios,
    insertUsuarioDirectorio,
    deleteUserDirectorio,
    updateUserDirectorio,

} = require('../controllers/controllerDirectorio');

var router = express.Router();


//ruta para el directorio
router.get('/consultarUsuarios',consultDirectorio);
router.get('/consultarUsuario',consultDirectorioPorId);
router.get('/filtrarUsuarios', filtroUsuarios);
router.post('/agregarUsuario',insertUsuarioDirectorio);
router.delete('/eliminarUsuario',deleteUserDirectorio);
router.put('/actualizarUsuario',updateUserDirectorio);


module.exports = router;