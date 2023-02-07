const joi = require('joi')

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

const crearActividad = joi.object({
    titulo: joi.string().required(),
    fechaInicio: joi.date().required(),
    fechaFinal: joi.date().required(),
    horaInicio: joi.string().required(),
    horaFinal: joi.string().required(),
    descripcion: joi.string().required(),
    vestimenta: joi.string().required(),
    objetivo: joi.string().required(),
    tiempoRecordatorio: joi.number().required(),
    idUsuarioCreo: joi.number().required(),
    fechaCreo: joi.date().required(),
    idStatus: joi.number().required(),
    idModalidad: joi.number().required(),
    idTipoActividad: joi.number().required(),
    idUsuarioActualizo: joi.number().required(),
    fechaActualizo: joi.date().required()
});

const updateActividad = joi.object({
    titulo: joi.string().optional(),
    fechaInicio: joi.date().optional(),
    fechaFinal: joi.date().optional(),
    horaInicio: joi.string().optional(),
    horaFinal: joi.string().optional(),
    descripcion: joi.string().optional(),
    vestimenta: joi.string().required(),
    objetivo: joi.string().optional(),
    tiempoRecordatorio: joi.number().required(),
    idUsuarioCreo: joi.number().optional(),
    fechaCreo: joi.date().optional(),
    idStatus: joi.number().optional(),
    idModalidad: joi.number().optional(),
    idTipoActividad: joi.number().optional(),
    idUsuarioActualizo: joi.number().optional(),
    fechaActualizo: joi.date().optional()
})

exports.createActividad = validator(crearActividad)
exports.updated = validator(updateActividad)