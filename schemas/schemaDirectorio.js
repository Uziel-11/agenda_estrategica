const joi = require('joi')

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

const insertUsuarioDirectorio = joi.object({
    id:joi.number(),
    nombre:joi.string(),
    apellidoPaterno: joi.string(),
    apellidoMaterno: joi.string(),
    celular: joi.string().max(10),
    correo: joi.string().email({minDomainSegments:2, tlds:{allow: ['com','net']}}),
    fechaCumpleanio: joi.date(),
    area: joi.string(),
    organizacion: joi.string(),
    idMunicipio: joi.number(),
    sexo: joi.string(),
    idCargo: joi.number(),
    numeroInterior: joi.string(),
    numeroExterior: joi.string(),
    idUsuario: joi.number(),
    curp: joi.string(),
    departamento: joi.string(),
    ciudad: joi.string(),
    estado:joi.string(),
    codigoPostal: joi.string(),
});

const updateUserDirectorio = joi.object({

    nombre:joi.string(),
    apellidoPaterno: joi.string(),
    apellidoMaterno: joi.string(),
    celular: joi.string().max(10),
    correo: joi.string().email({minDomainSegments:2, tlds:{allow: ['com','net']}}),
    fechaCumpleanio: joi.date(),
    area: joi.string(),
    organizacion: joi.string(),
    idMunicipio: joi.number(),
    sexo: joi.string(),
    idCargo: joi.number(),
    numeroInterior: joi.string(),
    numeroExterior: joi.string(),
    idUsuario: joi.number(),
    curp: joi.string(),
    departamento: joi.string(),
    ciudad: joi.string(),
    estado:joi.string(),
    codigoPostal: joi.string(),
});


exports.insertarUsuarioDirectorio = validator(insertUsuarioDirectorio)
exports.actualizarUserDirectorio = validator(updateUserDirectorio)




