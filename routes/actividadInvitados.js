var express = require("express")
var router = express.Router();

const {
    crearInvitado,
    actualizarInvitado,
    eliminarInvitado,
    leerInvitados
} = require('../controllers/controllerActividadInvitados')

router.post("/crearInvitado", crearInvitado);

router.put("/actualizarInvitado/:id", actualizarInvitado);

router.post("/eliminarInvitado", eliminarInvitado);

router.get("/leerInvitados", leerInvitados);

module.exports = router;