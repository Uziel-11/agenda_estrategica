var express = require("express")
var router = express.Router();
const {
    registrarMunicipio,
    consultMunicipio,
    updateMunicipio,
    deleteMunicipio,


} = require('../controllers/controllerCatalagoMunicipio')

router.post("/registrarMunicipio", registrarMunicipio);

router.get("/consultMunicipio", consultMunicipio);

router.put("/updateMunicipio", updateMunicipio);

router.delete("/deleteMunicipio", deleteMunicipio);


module.exports = router;