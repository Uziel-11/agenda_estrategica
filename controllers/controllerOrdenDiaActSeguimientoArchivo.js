const modelOrdenDiaActSeguimientoArchivo = require("../models/modelOrdenDiaActSeguimientoArchivo");
const {insertarOrdenDiaActSeguimientoArchivo} = require("../schemas/schemaOrdenDia");
const {actualizarOrdenDiaActSeguimientoArchivo} = require("../schemas/schemaOrdenDia")


const consultOrdenesDiaActSeguimientoArchivo = (req,res)=>{
    modelOrdenDiaActSeguimientoArchivo.consultOrdenesDiaActSeguimientoArchivo((data)=>{
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

const consultOrdenDiaActSeguimientoArchivoPorId = (req,res)=>{
    const id = req.body.id
    modelOrdenDiaActSeguimientoArchivo.consultOrdenDiaActSeguimientoArchivoPorId(id, (data)=>{
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

const consultOrdenDiaActSeguimientoArchivoPorParametro = (req, res) => {
    const param = req._parsedUrl.query.split("=")

    modelOrdenDiaActSeguimientoArchivo.consultOrdenDiaActSeguimientoArchivoPorParametro(param, (data) => {
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

const insertOrdenDiaActSeguimientoArchivo = (req,res) =>{
    //console.log("Insertando orden dia en la actividad")
    const {error, value} = insertarOrdenDiaActSeguimientoArchivo(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const ordenDiaActSeguimientoArchivo = {
            tipoArchivo:req.body.tipoArchivo,
            nombreArchivo: req.body.nombreArchivo,
            peso: req.body.peso,
            fechaCreo: req.body.fechaCreo,
            idCreo: req.body.idCreo,
            idSeguimiento: req.body.idSeguimiento

        }
        modelOrdenDiaActSeguimientoArchivo.insertOrdenDiaActSeguimientoArchivo(ordenDiaActSeguimientoArchivo, (data) => {
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

const deleteOrdenDiaActSeguimientoArchivo = (req, res) =>{

    const id = req.body.id
    modelOrdenDiaActSeguimientoArchivo.deleteOrdenDiaActSeguimientoArchivo(id,(data)=>{
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

const updateOrdenDiaActSeguimientoArchivo = (req, res) =>{
    const {error, value} = actualizarOrdenDiaActSeguimientoArchivo(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const ordenDiaActSeguimientoArchivo = {
            id: req.body.id,
            tipoArchivo:req.body.tipoArchivo,
            nombreArchivo: req.body.nombreArchivo,
            peso: req.body.peso,
            fechaCreo: req.body.fechaCreo,
            idCreo: req.body.idCreo,
            idSeguimiento: req.body.idSeguimiento
        }

        modelOrdenDiaActSeguimientoArchivo.updateOrdenDiaActSeguimientoArchivo(ordenDiaActSeguimientoArchivo, (data) => {
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
    consultOrdenesDiaActSeguimientoArchivo,
    consultOrdenDiaActSeguimientoArchivoPorId,
    consultOrdenDiaActSeguimientoArchivoPorParametro,
    insertOrdenDiaActSeguimientoArchivo,
    deleteOrdenDiaActSeguimientoArchivo,
    updateOrdenDiaActSeguimientoArchivo

}
