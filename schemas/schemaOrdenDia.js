const joi = require('joi')

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

const  insertOrdenDia = joi.object({
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
const insertOrdenDiaActividad = joi.object({

    idOrdenDia: joi.number(),
    horaInicio: joi.string(),
    actividad: joi.string(),
    fechaLimite: joi.date(),
    idStatus: joi.number(),
    idUsuarioCreo: joi.number(),
    fechaCreo: joi.date(),
    idUsuarioActualizo: joi.number(),
    fechaActualizo: joi.date()
});

const  updateOrdenDiaActividad = joi.object({
    id:joi.number(),
    idOrdenDia: joi.number(),
    horaInicio: joi.string(),
    actividad: joi.string(),
    fechaLimite: joi.date(),
    idStatus: joi.number(),
    idUsuarioCreo: joi.number(),
    fechaCreo: joi.date(),
    idUsuarioActualizo: joi.number(),
    fechaActualizo: joi.date()
});



const updateOrdenDia = joi.object({
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


exports.insertarOrdenDia = validator(insertOrdenDia)
exports.actualizarOrdenDia = validator(updateOrdenDia)

exports.insertarOrdenDiaActividad = validator(insertOrdenDiaActividad)
exports.actualizarOrdenDiaActividad= validator(updateOrdenDiaActividad)


