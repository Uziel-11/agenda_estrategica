const modelOrdenDiaActUsuario = require("../models/modelOrdenDiaActUsuario");
const {insertarOrdenDiaActUsuario} = require("../schemas/schemaOrdenDia");
const {actualizarOrdenDiaActUsuario} = require("../schemas/schemaOrdenDia")


const consultOrdenesDiaActUsuario = (req,res)=>{
    modelOrdenDiaActUsuario.consultOrdenesDiaActUsuario((data)=>{
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

const consultOrdenDiaActUsuarioPorId = (req,res)=>{
    const idOrdenDiaActividad = req.body.idOrdenDiaActividad
    modelOrdenDiaActUsuario.consultOrdenDiaActUsuarioPorId(idOrdenDiaActividad, (data)=>{
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

const consultOrdenDiaActUsuarioPorParametro = (req, res) => {
    const param = req._parsedUrl.query.split("=")

    modelOrdenDiaActUsuario.consultOrdenDiaActUsuarioPorParametro(param, (data) => {
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

const insertOrdenDiaActUsuario = (req,res) =>{
    //console.log("Insertando orden dia en la actividad")
    const {error, value} = insertarOrdenDiaActUsuario(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const ordenDiaActUsuario = {
            idOrdenDiaActividad: req.body.idOrdenDiaActividad,
            idUsuario: req.body.idUsuario,
            idStatus: req.body.idStatus,
            comentario: req.body.comentario,
            fechaCreo: req.body.fechaCreo,
            visto: req.body.visto,
            fechaVisto: req.body.fechaVisto
        }
        modelOrdenDiaActUsuario.insertOrdenDiaActUsuario(ordenDiaActUsuario, (data) => {
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

const deleteOrdenDiaActUsuario = (req, res) =>{

    const deleteOrdenDiaActividad = {
        idOrdenDiaActividad : req.body.idOrdenDiaActividad,
        idUsuario: req.body.idUsuario

    }

    modelOrdenDiaActUsuario.deleteOrdenDiaActUsuario(deleteOrdenDiaActividad,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'orden dia actividad usuario eliminada exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar el orden dia'
            })
        }
    })
}

const updateOrdenDiaActUsuario = (req, res) =>{
    const {error, value} = actualizarOrdenDiaActUsuario(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const ordenDiaActUsuario = {
            idOrdenDiaActividad: req.body.idOrdenDiaActividad,
            idUsuario: req.body.idUsuario,
            idStatus: req.body.idStatus,
            comentario: req.body.comentario,
            fechaCreo: req.body.fechaCreo,
            visto: req.body.visto,
            fechaVisto: req.body.fechaVisto
        }

        modelOrdenDiaActUsuario.updateOrdenDiaActUsuario(ordenDiaActUsuario, (data) => {
            if (data && data.affectedRows ===1){
                res.send({
                    status:true,
                    message: 'asignacion de actividad del orden dia actualizado exitosamente'
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
    consultOrdenesDiaActUsuario,
    consultOrdenDiaActUsuarioPorId,
    consultOrdenDiaActUsuarioPorParametro,
    insertOrdenDiaActUsuario,
    deleteOrdenDiaActUsuario,
    updateOrdenDiaActUsuario

}
