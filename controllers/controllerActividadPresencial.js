const modelActividadPresencial = require('../models/modelActividadPresencial');
const {request} = require("express");

const crearActPresencial = (req, res) => {
    const presencial = {
        idActividad: req.body.idActividad,
        lugar: req.body.lugar,
        colonia: req.body.colonia,
        numeroInterior: req.body.numeroInterior,
        numeroExterior: req.body.numeroExterior,
        calle: req.body.calle,
        latitud: req.body.latitud,
        longitud: req.body.latitud,
        codigoPostal: req.body.codigoPostal,
        idUsuarioCreo: req.body.idUsuarioCreo,
        fechaCreo: req.body.fechaCreo,
        idUsuarioActualizo: req.body.idUsuarioActualizo,
        fechaActualizo: req.body.fechaActualizo
    }

    modelActividadPresencial.crearActPresencial(presencial, (data) => {
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'registrado exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al registrar'
            })
        }
    })
}

const leerActPresencial = (req, res) => {
    modelActividadPresencial.leerActPresencial((data) => {
        if (data != null){
            res.send({
                status: true,
                data: data
            })
        }else {
            res.send({
                status: false,
                message: "Data Base is empty"
            })
        }
    })
}

const eliminarActPresencial = (req, res) => {
    const idActividad = req.body.idActividad;
    modelActividadPresencial.eliminarActPresencial(idActividad, (data) =>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'eliminada correctamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar '
            })
        }
    })
}

const actualizarActPresencial = (req, res) => {
    let comentario = {
        id: req.params.id,
        idActividad: req.body.idActividad,
        lugar: req.body.lugar,
        colonia: req.body.colonia,
        numeroInterior: req.body.numeroInterior,
        numeroExterior: req.body.numeroExterior,
        calle: req.body.calle,
        latitud: req.body.latitud,
        longitud: req.body.latitud,
        codigoPostal: req.body.codigoPostal,
        idUsuarioCreo: req.body.idUsuarioCreo,
        fechaCreo: req.body.fechaCreo,
        idUsuarioActualizo: req.body.idUsuarioActualizo,
        fechaActualizo: req.body.fechaActualizo
    }

    modelActividadPresencial.actualizarActPresencial(comentario, (data) =>{
        res.send({
            status: true,
            message: "Was updated correctly"
        })
    }, err => {
        res.send({
            status: false,
            message: "Was updated incorrect"
        })
    })
}

module.exports = {
    leerActPresencial,
    crearActPresencial,
    actualizarActPresencial,
    eliminarActPresencial
}