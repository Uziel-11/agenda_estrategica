const modelOrdenDiaDocumento = require("../models/modelOrdenDiaDocumento");
const {insertarOrdenDiaDocumento} = require("../schemas/schemaOrdenDia");
const {actualizarOrdenDiaDocumento} = require("../schemas/schemaOrdenDia")


const consultOrdenesDiaDocumento = (req,res)=>{
    modelOrdenDiaDocumento.consultOrdenesDiaDocumento((data)=>{
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

const consultOrdenDiaDocumentoPorId = (req,res)=>{
    const id = req.body.id
    modelOrdenDiaDocumento.consultOrdenDiaDocumentoPorId(id, (data)=>{
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

const consultOrdenDiaDocumentoPorParametro = (req, res) => {
    const param = req._parsedUrl.query.split("=")

    modelOrdenDiaDocumento.consultOrdenesDiaDocumentoPorParametro(param, (data) => {
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

const insertOrdenDiaDocumento = (req,res) =>{
    //console.log("Insertando orden dia en la actividad")
    const {error, value} = insertarOrdenDiaDocumento(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const ordenDiaDocumento = {
            nombre: req.body.nombre,
            tipoDocumento: req.body.tipoDocumento,
            url: req.body.url,
            idOrdenDia: req.body.idOrdenDia
        }
        modelOrdenDiaDocumento.insertOrdenDiaDocumento(ordenDiaDocumento, (data) => {
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

const deleteOrdenDiaDocumento = (req, res) =>{

    const id = req.body.id
    modelOrdenDiaDocumento.deleteOrdenDiaDocumento(id,(data)=>{
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

const updateOrdenDiaDocumento = (req, res) =>{
    const {error, value} = actualizarOrdenDiaDocumento(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const ordenDiaDocumento = {
            id: req.body.id,
            nombre: req.body.nombre,
            tipoDocumento: req.body.tipoDocumento,
            url: req.body.url,
            idOrdenDia: req.body.idOrdenDia
        }
        modelOrdenDiaDocumento.updateOrdenDiaDocumento(ordenDiaDocumento, (data) => {
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
    consultOrdenesDiaDocumento,
    consultOrdenDiaDocumentoPorId,
    consultOrdenDiaDocumentoPorParametro,
    insertOrdenDiaDocumento,
    deleteOrdenDiaDocumento,
    updateOrdenDiaDocumento

}
