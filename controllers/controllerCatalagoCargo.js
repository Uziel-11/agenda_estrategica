const modelCargo = require("../models/modelCatalagoCargo");
const {registerCargo} = require('../schemas/schemaCatalagoCargo')
const {actCargo} = require('../schemas/schemaCatalagoCargo')



const  registrarCargo = (req,res)=>{
    const {error, value} = registerCargo(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {
        const cargo = {
            id: req.body.id,
            cargo: req.body.cargo,
        }

        //Mandamos a llamar el metodo insertClient del modelo
        modelCargo.insertarCargo(cargo, (data) => {
            //si esta referenciado y ha sido afectado 1 fila
            if (data && data.affectedRows === 1) {
                console.log('data==> ', data)
                res.send({
                    status: true,
                    message: 'cargo registrado exitosamente'
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

const consultCargo = (req,res)=>{
    modelCargo.consultCargo((data)=>{
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

const updateCargo = (req, res) =>{
    const {error, value} = actCargo(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {
        const cargo = {
            id:req.body.id,
            cargo: req.body.cargo
        }

        modelCargo.updateCargo(cargo, (data) => {
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



const deleteCargo = (req, res) =>{
    const id = req.body.id
    modelCargo.deleteCargo(id,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'Cargo eliminado exitosamente del directorio'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar el cargo'
            })
        }
    })
}


module.exports = {
    registrarCargo,
    consultCargo,
    deleteCargo,
    updateCargo
}