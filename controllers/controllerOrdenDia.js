const {insertarOrdenDiaActividad} = require('../schemas/schemaOrdenDia')
const {actualizarOrdenDiaActividad} = require('../schemas/schemaOrdenDia');
const modelOrdenDia = require("../models/modelOrdenDia");


const consultOrdenesDiaActividad = (req,res)=>{
    modelOrdenDia.consultOrdenesDiaActividad((data)=>{
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
    modelOrdenDia.consultOrdenDiaActividadPorId(id, (data)=>{
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

    modelOrdenDia.consultOrdenDiaActividadPorParametro(param, (data) => {
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

        const ordenDia = {
            id: req.body.id,
            asuntoOrdenDia: req.body.asuntoOrdenDia,
            idActividad: req.body.idActividad,
            idUsuarioResponsable: req.body.idUsuarioResponsable,
            hora: req.body.hora,
            idStatus: req.body.idStatus,
            idUsuarioCreo: req.body.idUsuarioCreo,
            fechaCreo: req.body.fechaCreo,
            idUsuarioActualizo: req.body.idUsuarioActualizo,
            fechaActualizo: req.body.fechaActualizo
        }
        modelOrdenDia.insertOrdenDiaActividad(ordenDia, (data) => {
            if (data && data.affectedRows ===1){
                res.send({
                    status:true,
                    message: 'orden dia registrado exitosamente'
                })
            }else {
                res.send({
                    status: false,
                    message: 'Ocurrio un problema al registrar el orden dia de la actividad'
                })
            }
        })
    }
}

const deleteOrdenDiaActividad = (req, res) =>{

    const id = req.body.id
    modelOrdenDia.deleteOrdenDiaActividad(id,(data)=>{
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

        const ordenDia = {
            id: req.body.id,
            asuntoOrdenDia: req.body.asuntoOrdenDia,
            idActividad: req.body.idActividad,
            idUsuarioResponsable: req.body.idUsuarioResponsable,
            hora: req.body.hora,
            idStatus: req.body.idStatus,
            idUsuarioCreo: req.body.idUsuarioCreo,
            fechaCreo: req.body.fechaCreo,
            idUsuarioActualizo: req.body.idUsuarioActualizo,
            fechaActualizo: req.body.fechaActualizo
        }

        modelOrdenDia.updateOrdenDiaActividad(ordenDia, (data) => {
            if (data && data.affectedRows ===1){
                res.send({
                    status:true,
                    message: 'orden dia actualizado exitosamente'
                })
            }else {
                res.send({
                    status: false,
                    message: 'Ocurrio un problema al actualizar el orden dia de la actividad'
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