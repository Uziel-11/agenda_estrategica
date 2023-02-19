const modelOrdenDiaActSeguimiento = require("../models/modelOrdenDiaActSeguimiento");
const {insertarOrdenDiaActSeguimiento} = require("../schemas/schemaOrdenDia");
const {actualizarOrdenDiaActSeguimiento} = require("../schemas/schemaOrdenDia")


const consultOrdenesDiaActSeguimiento = (req,res)=>{
    modelOrdenDiaActSeguimiento.consultOrdenesDiaActSeguimiento((data)=>{
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

const consultOrdenDiaActSeguimientoPorId = (req,res)=>{
    const id = req.body.id
    modelOrdenDiaActSeguimiento.consultOrdenDiaActSeguimientoPorId(id, (data)=>{
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

const consultOrdenDiaActSeguimientoPorParametro = (req, res) => {
    const param = req._parsedUrl.query.split("=")

    modelOrdenDiaActSeguimiento.consultOrdenDiaActSeguimientoPorParametro(param, (data) => {
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

const insertOrdenDiaActSeguimiento = (req,res) =>{
    //console.log("Insertando orden dia en la actividad")
    const {error, value} = insertarOrdenDiaActSeguimiento(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const ordenDiaActSeguimiento = {
            idOrdenDiaActividad: req.body.idOrdenDiaActividad,
            idUsuario: req.body.idUsuario,
            comentario: req.body.comentario,
            fechaCreo: req.body.fechaCreo
        }
        modelOrdenDiaActSeguimiento.insertOrdenDiaActSeguimiento(ordenDiaActSeguimiento, (data) => {
            if (data && data.affectedRows ===1){
                res.send({
                    status:true,
                    message: 'seguimiento de actividad del orden dia registrado exitosamente'
                })
            }else {
                res.send({
                    status: false,
                    message: 'Ocurrio un problema al registrar el seguimiento de la actividad del orden dia '
                })
            }
        })
    }
}

const deleteOrdenDiaActSeguimiento = (req, res) =>{

    const id = req.body.id
    modelOrdenDiaActSeguimiento.deleteOrdenDiaActSeguimiento(id,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'Seguimiento de la actividad del orden dia eliminada exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar el seguimineto de la actividad el orden dia'
            })
        }
    })
}

const updateOrdenDiaActSeguimiento = (req, res) =>{
    const {error, value} = actualizarOrdenDiaActSeguimiento(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const ordenDiaActSeguimiento = {
            id:req.body.id,
            idOrdenDiaActividad: req.body.idOrdenDiaActividad,
            idUsuario: req.body.idUsuario,
            comentario: req.body.comentario,
            fechaCreo: req.body.fechaCreo
        }

        modelOrdenDiaActSeguimiento.updateOrdenDiaActSeguimiento(ordenDiaActSeguimiento, (data) => {
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
    consultOrdenesDiaActSeguimiento,
    consultOrdenDiaActSeguimientoPorId,
    consultOrdenDiaActSeguimientoPorParametro,
    insertOrdenDiaActSeguimiento,
    deleteOrdenDiaActSeguimiento,
    updateOrdenDiaActSeguimiento

}
