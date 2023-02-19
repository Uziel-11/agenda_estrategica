const modelActividadPresencial = require('../models/modelActividadPresencial');

const crearActPresencial = (req, res) => {
    const comentario = {
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

    modelActividadPresencial.crearActPresencial(comentario, (data) => {
        res.send({
            status: true,
            message: 'The Message is added correctly'
        })
    }, err => {
        res.send({
            status: false,
            message: 'The Message was not added'
        })
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
    modelActividadPresencial.eliminarActPresencial(req.params.id, (data) =>{
        res.send({
            status: true,
            message: "Was deleted correctly" + req.params.id
        })
    }, err => {
        res.send({
            status: false,
            message: "Was deleted incorrect" + err
        })
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