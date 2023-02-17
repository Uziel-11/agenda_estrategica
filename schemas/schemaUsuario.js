const joi = require('joi')

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });
/*
    La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
    Puede tener otros símbolos.
    Ejemplos:
    w3Unpocodet0d0
    w3Unpo<code>t0d0

 */
const insertarUsuario = joi.object({
    nombre:  joi.string().required(),
    apellidoPaterno:  joi.string().required(),
    apellidoMaterno:  joi.string().required(),
    celular:  joi.string().required(),
    curp:  joi.string().required(),
    correo: joi.string().email({minDomainSegments:2, tlds:{allow: ['com','net']}}).required(),
    fechaCumpleanio: joi.date().required(),
    area: joi.string().required(),
    organizacion: joi.string().required(),
    userName: joi.string().required(),
    password: joi.string().pattern(new RegExp('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$')).required(),
    idCargo: joi.number(),
    sexo: joi.string().required(),
    idMunicipio: joi.number(),
    numeroInterior: joi.string().required(),
    numeroExterior: joi.string().required(),
    direcccion: joi.string().required(),
});
const actualizarUsuario = joi.object({
    id: joi.number(),
    nombre:  joi.string().required(),
    apellidoPaterno:  joi.string().required(),
    apellidoMaterno:  joi.string().required(),
    celular:  joi.string().required(),
    curp:  joi.string().required(),
    correo: joi.string().email({minDomainSegments:2, tlds:{allow: ['com','net']}}).required(),
    fechaCumpleanio: joi.date().required(),
    area: joi.string().required(),
    organizacion: joi.string().required(),
    userName: joi.string().required(),
    password: joi.string().pattern(new RegExp('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$')).required(),
    idCargo: joi.number(),
    sexo: joi.string().required(),
    idMunicipio: joi.number(),
    numeroInterior: joi.string().required(),
    numeroExterior: joi.string().required(),
    direcccion: joi.string().required(),
});


exports.insertUsuario = validator(insertarUsuario)
exports.updateUsuario = validator(actualizarUsuario)