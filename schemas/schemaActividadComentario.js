const joi = require('joi')

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

const nuevoComentario = joi.object({
    comentario: joi.string().required(),
    idActividad: joi.number().required(),
    idUsuarioCreo: joi.number().required(),
    fechaCreo: joi.date().required()
})

const actualizarComentario = joi.object({
    comentario: joi.string().optional(),
    idActividad: joi.number().required(),
    idUsuarioCreo: joi.number().required(),
    fechaCreo: joi.date().required()
})

module.exports.nuevoComentario = validator(nuevoComentario)
module.exports.actializarComentario = validator(actualizarComentario)