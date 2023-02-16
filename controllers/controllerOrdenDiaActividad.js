
const modelOrdenDiaActividad = require("../models/modelOrdenDiaActividad");
const {insertarOrdenDiaActividad} = require("../schemas/schemaOrdenDia");
const {actualizarOrdenDiaActividad} = require("../schemas/schemaOrdenDia")
const consultOrdenesDiaActividad = (req,res)=>{
    modelOrdenDiaActividad.consultOrdenesDiaActividad((data)=>{
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

const consultOrdenDiaActividadPorId = (req,res)=>{
    const id = req.body.id
    modelOrdenDiaActividad.consultOrdenDiaActividadPorId(id, (data)=>{
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

const consultOrdenDiaActividadPorParametro = (req, res) => {
    const param = req._parsedUrl.query.split("=")

    modelOrdenDiaActividad.consultOrdenDiaActividadPorParametro(param, (data) => {
        if (data != null){
            res.send({
                status: true,
                data: data
            })
        }else {
            res.send({
                status: false,
                message: "No hay ningun dato para mostrar"
            })
        }
    })
}

const insertOrdenDiaActividad = (req,res) =>{
    //console.log("Insertando orden dia en la actividad")
    const {error, value} = insertarOrdenDiaActividad(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const ordenDiaActividad = {
            idOrdenDia: req.body.idOrdenDia,
            horaInicio: req.body.horaInicio,
            actividad: req.body.actividad,
            fechaLimite: req.body.fechaLimite,
            idStatus: req.body.idStatus,
            idUsuarioCreo: req.body.idUsuarioCreo,
            fechaCreo: req.body.fechaCreo,
            idUsuarioActualizo: req.body.idUsuarioActualizo,
            fechaActualizo: req.body.fechaActualizo
        }
        modelOrdenDiaActividad.insertOrdenDiaActividad(ordenDiaActividad, (data) => {
            if (data && data.affectedRows ===1){
                res.send({
                    status:true,
                    message: 'actividad del orden dia registrado exitosamente'
                })
            }else {
                res.send({
                    status: false,
                    message: 'Ocurrio un problema al registrar la actividad del orden dia '
                })
            }
        })
    }
}

const deleteOrdenDiaActividad = (req, res) =>{

    const id = req.body.id
    modelOrdenDiaActividad.deleteOrdenDiaActividad(id,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'orden dia eliminada exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar el orden dia'
            })
        }
    })
}

const updateOrdenDiaActividad = (req, res) =>{
    const {error, value} = actualizarOrdenDiaActividad(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const ordenDiaActividad = {
            id: req.body.id,
            idOrdenDia: req.body.idOrdenDia,
            horaInicio: req.body.horaInicio,
            actividad: req.body.actividad,
            fechaLimite: req.body.fechaLimite,
            idStatus: req.body.idStatus,
            idUsuarioCreo: req.body.idUsuarioCreo,
            fechaCreo: req.body.fechaCreo,
            idUsuarioActualizo: req.body.idUsuarioActualizo,
            fechaActualizo: req.body.fechaActualizo
        }

        modelOrdenDiaActividad.updateOrdenDiaActividad(ordenDiaActividad, (data) => {
            if (data && data.affectedRows ===1){
                res.send({
                    status:true,
                    message: 'actividad del orden dia actualizado exitosamente'
                })
            }else {
                res.send({
                    status: false,
                    message: 'Ocurrio un problema al actualizar la actividad del orden dia'
                })
            }
        })
    }
}


module.exports = {
    consultOrdenesDiaActividad,
    consultOrdenDiaActividadPorId,
    consultOrdenDiaActividadPorParametro,
    insertOrdenDiaActividad,
    deleteOrdenDiaActividad,
    updateOrdenDiaActividad

}
