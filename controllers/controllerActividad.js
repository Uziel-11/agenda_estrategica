const modelActividad = require("../models/modelActividad")
const {createActividad} = require('../schemas/schemasActividad')

const crearActividad = (req, res) => {
    const {error, value} = createActividad(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const actividad = {
            titulo: req.body.titulo,
            fechaInicio: req.body.fechaInicio,
            fechaFinal: req.body.fechaFinal,
            horaInicio: req.body.horaInicio,
            horaFinal: req.body.horaFinal,
            descripcion: req.body.descripcion,
            vestimenta: req.body.vestimenta,
            objetivo: req.body.objetivo,
            tiempoRecordatorio: req.body.tiempoRecordatorio,
            idUsuarioCreo: req.body.idUsuarioCreo,
            fechaCreo: req.body.fechaCreo,
            idStatus: req.body.idStatus,
            idModalidad: req.body.idModalidad,
            idTipoActividad: req.body.idTipoActividad,
            idUsuarioActualizo: req.body.idUsuarioActualizo,
            fechaActualizo: req.body.fechaActualizo
        }

        modelActividad.crearActividad(actividad, (data) => {
            res.send({
                status: true,
                message: "The Activity is added correctly"
            })
        }, err => {
            res.send({
                status: false,
                message: "The Activity was not added"
            })
        })
    }
}

const leerActividades = (req, res) => {
    modelActividad.leerActividades((data) =>{
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


const eliminarActividad = (req, res) => {
    modelActividad.eliminarActividad(req.params.id, (data) => {
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

const leerActividadPorId = (req, res) => {
    console.log(req.params)
    modelActividad.leerActividadPorId(req.params.id, (data) => {
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

const leerActividadPorParametro = (req, res) => {
    let param = req._parsedUrl.query.split("=")
    modelActividad.leerActividadPorParametro(param, (data) => {
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

const actualizarActividad = (req, res) => {
    let actividad = {
        id: req.params.id,
        titulo: req.body.titulo,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        horaInicio: req.body.horaInicio,
        horaFinal: req.body.horaFinal,
        descripcion: req.body.descripcion,
        vestimenta: req.body.vestimenta,
        objetivo: req.body.objetivo,
        tiempoRecordatorio: req.body.tiempoRecordatorio,
        idUsuarioCreo: req.body.idUsuarioCreo,
        fechaCreo: req.body.fechaCreo,
        idStatus: req.body.idStatus,
        idModalidad: req.body.idModalidad,
        idTipoActividad: req.body.idTipoActividad,
        idUsuarioActualizo: req.body.idUsuarioActualizo,
        fechaActualizo: req.body.fechaActualizo
    }

    modelActividad.actualizarActividad(actividad, (data) => {
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
    crearActividad,
    eliminarActividad,
    leerActividades,
    actualizarActividad,
    leerActividadPorId,
    leerActividadPorParametro
}