const actComentArch = require('../models/modelActividadComentariosArchivo');

const crearArchivo = (req, res) => {
    const archivo = {
        nombre: req.body.nombre,
        tipoArchivo: req.body.tipoArchivo,
        url: req.body.url,
        peso: req.body.peso,
        idActividadComentario: req.body.idActividadComentario
    }

    actComentArch.crearArchivo(archivo, (data) => {
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

const leerArchivos = (req, res) => {
    actComentArch.leerArchivos((data) => {
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

const eliminarArchivo = (req, res) => {
    actComentArch.eliminarArchivo(req.params.id, (data) => {
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

const actualizarArchivo = (req, res) => {
    const archivo = {
        id: req.params.id,
        nombre: req.body.nombre,
        tipoArchivo: req.body.tipoArchivo,
        url: req.body.url,
        peso: req.body.peso,
        idActividadComentario: req.body.idActividadComentario
    }
    actComentArch.actualizarArchivo(archivo, (data) => {
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
    crearArchivo,
    leerArchivos,
    eliminarArchivo,
    actualizarArchivo,
}


