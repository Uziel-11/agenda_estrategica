const modelDirectorio = require("../models/modelDirectorio")
const {insertarUsuarioDirectorio} = require('../schemas/schemaDirectorio')
const {actualizarUserDirectorio} = require('../schemas/schemaDirectorio');

const consultDirectorio = (req,res)=>{
    modelDirectorio.consultDirectorio((data)=>{
        if ( data != null){
            res.send({
                status: true,
                data: data
            })
        }else {
            res.send({
                status: false,
                message: "Ningun dato"
            })
        }
    })
}



const consultDirectorioPorId = (req,res)=>{
    const id = req.body.id
    modelDirectorio.consultDirectorioPorId(id, (data)=>{
        if ( data != null){
            res.send({
                status: true,
                data: data
            })
        }else {
            res.send({
                status: false,
                message: "Ningun dato"
            })
        }
    })
}



const insertUsuarioDirectorio = (req,res) =>{
    console.log("Insertando usuario en el directorio")

    const {error, value} = insertarUsuarioDirectorio(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const usuarioDirectorio = {
            id: req.body.id,
            nombre: req.body.nombre,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            celular: req.body.celular,
            correo: req.body.correo,
            fechaCumpleanio: req.body.fechaCumpleanio,
            area: req.body.area,
            organizacion: req.body.organizacion,
            idMunicipio: req.body.idMunicipio,
            sexo: req.body.sexo,
            idCargo: req.body.idCargo,
            numeroInterior: req.body.numeroInterior,
            numeroExterior: req.body.numeroExterior,
            idUsuario: req.body.idUsuario,
            curp: req.body.curp,
            departamento: req.body.departamento,
            ciudad: req.body.ciudad,
            estado: req.body.estado,
            codigoPostal: req.body.codigoPostal
        }
        modelDirectorio.insertDirectorio(usuarioDirectorio, (data) => {
            res.send({
                status: true,
                message: "El usuario del directorio se añadio correctamente"
            })
        }, err => {
            res.send({
                status: false,
                message: "El usuario del directorio no se añadio "
            })
        })
    }
}

const deleteUserDirectorio = (req, res) =>{

    const id = req.body.id
    modelDirectorio.deleteUserDirectorio(id,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'usuario eliminado exitosamente del directorio'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar el usuario del directorio'
            })
        }
    })
}

const updateUserDirectorio = (req, res) =>{
    const {error, value} = actualizarUserDirectorio(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const usuarioDirectorio = {
            id: req.body.id,
            nombre: req.body.nombre,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            celular: req.body.celular,
            correo: req.body.correo,
            fechaCumpleanio: req.body.fechaCumpleanio,
            area: req.body.area,
            organizacion: req.body.organizacion,
            idMunicipio: req.body.idMunicipio,
            sexo: req.body.sexo,
            idCargo: req.body.idCargo,
            numeroInterior: req.body.numeroInterior,
            numeroExterior: req.body.numeroExterior,
            idUsuario: req.body.idUsuario,
            curp: req.body.curp,
            departamento: req.body.departamento,
            ciudad: req.body.ciudad,
            estado: req.body.estado,
            codigoPostal: req.body.codigoPostal
        }

        modelDirectorio.updateUserDirectorio(usuarioDirectorio, (data) => {
            res.send({
                status: true,
                message: "El usuario del directorio ha sido actualizado correctamente"
            })
        }, err => {
            res.send({
                status: false,
                message: "Ocurrio un problema al actualizar los datos del usuario del directorio "
            })
        })
    }
}


module.exports = {
    consultDirectorio,
    consultDirectorioPorId,
    insertUsuarioDirectorio,
    deleteUserDirectorio,
    updateUserDirectorio,
}