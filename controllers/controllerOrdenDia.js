const {insertarOrdenDia} = require('../schemas/schemaOrdenDia')
const {actualizarOrdenDia} = require('../schemas/schemaOrdenDia');
const modelOrdenDia = require("../models/modelOrdenDia");


const consultOrdenesDia = (req,res)=>{
    modelOrdenDia.consultOrdenesDia((data)=>{
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

const consultOrdenDiaPorId = (req,res)=>{
    const id = req.body.id
    modelOrdenDia.consultOrdenDiaPorId(id, (data)=>{
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

const consultOrdenDiaPorParametro = (req, res) => {
    const param = req._parsedUrl.query.split("=")
    modelOrdenDia.consultOrdenDiaPorParametro(param, (data) => {
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

const insertOrdenDia = (req,res) =>{
    //console.log("Insertando orden dia en la actividad")
    const {error, value} = insertarOrdenDia(req.body)
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
        modelOrdenDia.insertOrdenDia(ordenDia, (data) => {
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

const deleteOrdenDia = (req, res) =>{

    const id = req.body.id
    modelOrdenDia.deleteOrdenDia(id,(data)=>{
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

const updateOrdenDia = (req, res) =>{
    const {error, value} = actualizarOrdenDia(req.body)
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

        modelOrdenDia.updateOrdenDia(ordenDia, (data) => {
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
    consultOrdenesDia,
    consultOrdenDiaPorId,
    consultOrdenDiaPorParametro,
    insertOrdenDia,
    deleteOrdenDia,
    updateOrdenDia

}