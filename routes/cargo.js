var express = require("express")
var router = express.Router();
const {
    registrarCargo,
    consultCargo,
    updateCargo,
    deleteCargo,


} = require('../controllers/controllerCatalagoCargo')

router.post("/registrarCargo", registrarCargo);

router.get("/consultCargo", consultCargo);

router.put("/updateCargo", updateCargo);

router.delete("/deleteCargo", deleteCargo);


module.exports = router;