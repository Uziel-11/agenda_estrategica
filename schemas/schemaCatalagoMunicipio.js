const joi = require('joi')

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

const registrarMunicipio = joi.object({
    municipio:joi.string(),
});

const actualizarMunicipio = joi.object({
    id:joi.number(),
    municipio:joi.string(),
});


exports.registerMunicipio = validator(registrarMunicipio)
exports.actMunicipio = validator(actualizarMunicipio)


