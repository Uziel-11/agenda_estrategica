const joi = require('joi')

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

const registrarCargo = joi.object({
    id:joi.number(),
    cargo:joi.string(),
});

const actualizarCargo = joi.object({
    id:joi.number(),
    cargo:joi.string(),
});


exports.registerCargo = validator(registrarCargo)
exports.actCargo = validator(actualizarCargo)

