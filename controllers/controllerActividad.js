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
    const id = req.body.id
    console.log("ID", id)
    modelActividad.eliminarActividad(id, (data) => {
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'actividad eliminada correctamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar la actividad'
            })
        }
    })
}


const consultIdActividad = (req, res) => {
    const titulo =  req.body.titulo;
    console.log(titulo)
    modelActividad.consultIdActividad(titulo, (data) => {
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

const leerActividadPorId = (req, res) => {
    const id = req.body.id;

    modelActividad.leerActividadPorId(id, (data) => {
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

const leerActividadPorIdUsuario = (req, res) => {
    const idUsuarioCreo =  req.body.idUsuarioCreo;
    console.log(idUsuarioCreo)
    modelActividad.leerActividadPorIdUsuario(idUsuarioCreo, (data) => {
        if (data != null) {
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

const leerActividadPorParametro = (req, res) => {
    let param = req._parsedUrl.query.split('=')
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
    leerActividadPorParametro,
    consultIdActividad,
    leerActividadPorIdUsuario
}