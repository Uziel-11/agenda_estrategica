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

const insertOrdenDiaActSeguimiento = joi.object({
    idOrdenDiaActividad: joi.number(),
    idUsuario: joi.number(),
    comentario: joi.string(),
    fechaCreo: joi.date()
});

const updateOrdenDiaActSeguimiento = joi.object({
    id:joi.number(),
    idOrdenDiaActividad: joi.number(),
    idUsuario: joi.number(),
    comentario: joi.string(),
    fechaCreo: joi.date()
});

const insertOrdenDiaActUsuario = joi.object({
    idOrdenDiaActividad: joi.number(),
    idUsuario: joi.number(),
    idStatus: joi.number(),
    comentario: joi.string(),
    fechaCreo: joi.date(),
    visto: joi.number(),
    fechaVisto: joi.date()
});

const updateOrdenDiaActUsuario = joi.object({
    idOrdenDiaActividad: joi.number(),
    idUsuario: joi.number(),
    idStatus: joi.number(),
    comentario: joi.string(),
    fechaCreo: joi.date(),
    visto: joi.number(),
    fechaVisto: joi.date()
});


const insertOrdenDiaActSeguimientoArchivo = joi.object({
    tipoArchivo: joi.string(),
    nombreArchivo: joi.string(),
    peso: joi.number(),
    fechaCreo: joi.date(),
    idCreo: joi.number(),
    idSeguimiento: joi.number()
})

const updateOrdenDiaActSeguimientoArchivo = joi.object({
    id:joi.number(),
    tipoArchivo: joi.string(),
    nombreArchivo: joi.string(),
    peso: joi.number(),
    fechaCreo: joi.date(),
    idCreo: joi.number(),
    idSeguimiento: joi.number()
})


//ordenDiaDocumento
const insertOrdenDiaDocumento= joi.object({
    nombre: joi.string(),
    tipoDocumento:joi.string(),
    url:joi.string(),
    idOrdenDia:joi.number(),

})

const updateOrdenDiaDocumento = joi.object({
    id:joi.number(),
    nombre: joi.string(),
    tipoDocumento:joi.string(),
    url:joi.string(),
    idOrdenDia:joi.number(),
})

//ordenDia
exports.insertarOrdenDia = validator(insertOrdenDia)
exports.actualizarOrdenDia = validator(updateOrdenDia)

//OrdenDiaActividad
exports.insertarOrdenDiaActividad = validator(insertOrdenDiaActividad)
exports.actualizarOrdenDiaActividad= validator(updateOrdenDiaActividad)

//OrdenDiaActUsuario
exports.insertarOrdenDiaActUsuario = validator(insertOrdenDiaActUsuario)
exports.actualizarOrdenDiaActUsuario= validator(updateOrdenDiaActUsuario)

//OrdenDiaActSeguimiento
exports.insertarOrdenDiaActSeguimiento = validator(insertOrdenDiaActSeguimiento)
exports.actualizarOrdenDiaActSeguimiento = validator(updateOrdenDiaActSeguimiento)

//OrdenDiaActSeguimientoArchivo
exports.insertarOrdenDiaActSeguimientoArchivo = validator(insertOrdenDiaActSeguimientoArchivo)
exports.actualizarOrdenDiaActSeguimientoArchivo = validator(updateOrdenDiaActSeguimientoArchivo)

//OrdenDiaDocumento
exports.insertarOrdenDiaDocumento = validator(insertOrdenDiaDocumento)
exports.actualizarOrdenDiaDocumento = validator(updateOrdenDiaDocumento)
