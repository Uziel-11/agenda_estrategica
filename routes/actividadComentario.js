var express = require("express")
var router = express.Router();

const {
    crearComentario,
    leerComentarios,
    eliminarComentario,
    actualizarComentario
} = require('../controllers/controllerActividadComentario')

router.post("/crearComentario", crearComentario);

router.put("/actualizarComentario/:id", actualizarComentario);

router.post("/eliminarComentario/:id", eliminarComentario);

router.get("/leerComentarios", leerComentarios);

module.exports = router;