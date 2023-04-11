const modelMunicipio = require("../models/modelCatalagoMunicipio");
const {registerMunicipio} = require('../schemas/schemaCatalagoMunicipio')
const {actMunicipio} = require('../schemas/schemaCatalagoMunicipio')



const  registrarMunicipio = (req,res)=>{
    const {error, value} = registerMunicipio(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {
        const municipio = {
            municipio: req.body.municipio,
        }

        //Mandamos a llamar el metodo insertClient del modelo
        modelMunicipio.insertarMunicipio(municipio, (data) => {
            //si esta referenciado y ha sido afectado 1 fila
            if (data && data.affectedRows === 1) {
                console.log('data==> ', data)
                res.send({
                    status: true,
                    message: 'municipio registrado exitosamente'
                })
            } else {
                res.send({
                    status: false,
                    message: 'Ocurrio un problema en el registro'
                })
            }
        })
    }
}

const consultMunicipio = (req,res)=>{
    modelMunicipio.consultMunicipio((data)=>{
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

const updateMunicipio = (req, res) =>{
    const {error, value} = actMunicipio(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {
        const municipio = {
            id:req.body.id,
            municipio: req.body.municipio
        }

        modelMunicipio.updateMunicipio(municipio, (data) => {
            if (data && data.affectedRows ===1){
                res.send({
                    status:true,
                    message: 'datos de la cuenta actualizados exitosamente'
                })
            }else {
                res.send({
                    status: false,
                    message: 'Ocurrio un problema al actualizar los datos'
                })
            }
        })
    }
}



const deleteMunicipio = (req, res) =>{
    const id = req.body.id
    modelMunicipio.deleteMunicipio(id,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'Municipio eliminado exitosamente del directorio'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar el municipio'
            })
        }
    })
}


module.exports = {
    registrarMunicipio,
    consultMunicipio,
    deleteMunicipio,
    updateMunicipio
}