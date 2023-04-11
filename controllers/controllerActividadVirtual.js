const modelActividadVirtual = require('../models/modelActividadVirtual')

const crearActVirtual = (req, res) => {
    const virtual = {
        idActividad: req.body.idActividad,
        linkReunion: req.body.linkReunion,
        producto: req.body.producto,
        idUsuarioCreo: req.body.idUsuarioCreo,
        fechaCreo: req.body.fechaCreo,
        idUsuarioActualizo: req.body.idUsuarioActualizo,
        fechaActualizo: req.body.fechaActualizo
    }

    console.log(virtual)
    modelActividadVirtual.crearActVirtual(virtual, (data) => {
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
    const idActividad = req.body.idActividad;
    console.log("idActividad: ",idActividad)
    modelActividadVirtual.eliminarActVirtual(idActividad, (data) => {
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

module.exports = {
    crearActVirtual,
    leerActVirtual,
    actualizarActVirtual,
    eliminarActVirtual
}



