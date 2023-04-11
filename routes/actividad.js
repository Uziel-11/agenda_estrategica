var express = require("express")
var router = express.Router();
const {
    crearActividad,
    actualizarActividad,
    eliminarActividad,
    leerActividades,
    leerActividadPorId,
    leerActividadPorParametro,
    consultIdActividad,
    leerActividadPorIdUsuario


} = require('../controllers/controllerActividad')

router.post("/crearActividad", crearActividad);

router.put("/actualizarActividad/:id", actualizarActividad);

router.post("/eliminarActividad", eliminarActividad);

router.get("/leerActividades", leerActividades);

router.post("/leerActividad", leerActividadPorId)

router.get("/filtrarPorParametro", leerActividadPorParametro)

router.post("/consultIdActividad",consultIdActividad)

router.post("/leerActividadPorIdUsuario",leerActividadPorIdUsuario)

module.exports = router;