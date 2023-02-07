var express = require("express")
const {
    crearActividad,
    actualizarActividad,
    eliminarActividad,
    leerActividades,
    leerActividadPorId,
    leerActividadPorParametro
} = require('../controllers/controllerActividad')
var router = express.Router();

router.post("/crearActividad", crearActividad);

router.put("/actualizarActividad/:id", actualizarActividad);

router.post("/eliminarActividad/:id", eliminarActividad);

router.get("/leerActividades", leerActividades);

router.get("/leerActividad/:id", leerActividadPorId)

router.get("/filtrarPorParametro", leerActividadPorParametro)

module.exports = router;