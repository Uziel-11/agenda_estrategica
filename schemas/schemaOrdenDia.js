const joi = require('joi')

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

const  insertOrdenDiaActividad = joi.object({
    id: joi.number(),
    asuntoOrdenDia: joi.string(),
    idActividad: joi.number(),
    idUsuarioResponsable: joi.number(),
    hora: joi.string(),
    idStatus: joi.number(),
    idUsuarioCreo: joi.number(),
    fechaCreo: joi.date(),
    idUsuarioActualizo: joi.number(),
    fechaActualizo: joi.date()
});

const updateOrdenDiaActividad = joi.object({
    id: joi.number(),
    asuntoOrdenDia: joi.string(),
    idActividad: joi.number(),
    idUsuarioResponsable: joi.number(),
    hora: joi.string(),
    idStatus: joi.number(),
    idUsuarioCreo: joi.number(),
    fechaCreo: joi.date(),
    idUsuarioActualizo: joi.number(),
    fechaActualizo: joi.date()
});


exports.insertarOrdenDiaActividad = validator(insertOrdenDiaActividad)
exports.actualizarOrdenDiaActividad = validator(updateOrdenDiaActividad)



