var express = require("express")
var router = express.Router();

const {
    leerActPresencial,
    crearActPresencial,
    actualizarActPresencial,
    eliminarActPresencial
} = require('../controllers/controllerActividadPresencial')

router.post("/crearActPresencial", crearActPresencial);

router.put("/actualizarActPresencial/:id", actualizarActPresencial);

router.post("/eliminarActPresencial/:id", eliminarActPresencial);

router.get("/leerActPresencial", leerActPresencial);

module.exports = router;