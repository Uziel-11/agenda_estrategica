const modelActividadVirtual = require('../models/modelActividadVirtual')

const crearActVirtual = (req, res) => {
    const datos = {
        idActividad: req.body.idActividad,
        link: req.body.url,
        producto: req.body.producto,
        idUsuarioCreo: req.body.idUsuarioCreo,
        fechaCreo: req.body.fechaCreo,
        idUsuarioActualizo: req.body.idUsuarioActualizo,
        fechaActualizo: req.body.fechaActualizo
    }

    modelActividadVirtual.crearActVirtual(datos, (data) => {
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


const leerActVirtual = (req, res) => {
    modelActividadVirtual.leerActVirtual((data) => {
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
const actualizarActVirtual = (req, res) => {
    const datos = {
        idActividad: req.body.idActividad,
        link: req.body.url,
        producto: req.body.producto,
        idUsuarioCreo: req.body.idUsuarioCreo,
        fechaCreo: req.body.fechaCreo,
        idUsuarioActualizo: req.body.idUsuarioActualizo,
        fechaActualizo: req.body.fechaActualizo
    }

    modelActividadVirtual.actualizarActVirtual(datos, (data) => {
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


const eliminarActVirtual = (req, res) => {
    modelActividadVirtual.eliminarActVirtual(req.params.id, (data) => {
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

module.exports = {
    crearActVirtual,
    leerActVirtual,
    actualizarActVirtual,
    eliminarActVirtual
}



