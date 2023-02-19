var express = require("express")
var router = express.Router();

const {
    leerActVirtual,
    crearActVirtual,
    actualizarActVirtual,
    eliminarActVirtual
} = require('../controllers/controllerActividadVirtual')

router.post("/crearActVirtual", crearActVirtual);

router.put("/actualizarActVirtual/:id", actualizarActVirtual);

router.post("/eliminarActVirtual/:id", eliminarActVirtual);

router.get("/leerActVirtual", leerActVirtual);

module.exports = router;