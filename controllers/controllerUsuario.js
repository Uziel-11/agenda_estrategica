const modelUsuario = require("../models/modelUsuario");
const {insertUsuario} = require('../schemas/schemaUsuario')
const {updateUsuario} = require('../schemas/schemaUsuario')

const inicioSesionUsuario = (req, res) => {
    modelUsuario.inicioSesionUsuario(req.body.userName,req.body.password,(data)=>{
        //Metodo callback retorma el valor del modelo UserDAO
        try{
            if(!data)throw new Err("Ups, algo salio mal... si usted no tiene una cuenta registrese")
            console.log('Data===>', data)
            res.send({  //Enviamos response
                status: true,
                message:'Inicio de sesion correcta'
            })
        }catch (Err){
            res.send({ //Enviamos response
                status:false,
                message:'Datos incorrectos, revise correctamente sus datos'
            })
        }
    })
}

const  registrarUsuario = (req,res)=>{
    const {error, value} = insertUsuario(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {
        const user = {
            nombre: req.body.nombre,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            celular: req.body.celular,
            curp: req.body.curp,
            correo: req.body.correo,
            fechaCumpleanio: req.body.fechaCumpleanio,
            area: req.body.area,
            organizacion: req.body.organizacion,
            userName: req.body.userName,
            password: req.body.password,
            idCargo: req.body.idCargo,
            sexo: req.body.sexo,
            idMunicipio: req.body.idMunicipio,
            numeroInterior: req.body.numeroInterior,
            numeroExterior: req.body.numeroExterior,
            direcccion: req.body.direcccion
        }

        //Mandamos a llamar el metodo insertClient del modelo
        modelUsuario.insertarUsuario(user, (data) => {
            //si esta referenciado y ha sido afectado 1 fila
            if (data && data.affectedRows === 1) {
                console.log('data==> ', data)
                res.send({
                    status: true,
                    message: 'usuario registrado exitosamente'
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

const consultUser = (req,res)=>{
    modelUsuario.consultUser((data)=>{
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

const updateUser = (req, res) =>{
    const {error, value} = updateUsuario(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {
        const user = {
            id:req.body.id,
            nombre: req.body.nombre,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            celular: req.body.celular,
            curp: req.body.curp,
            correo: req.body.correo,
            fechaCumpleanio: req.body.fechaCumpleanio,
            area: req.body.area,
            organizacion: req.body.organizacion,
            userName: req.body.userName,
            password: req.body.password,
            idCargo: req.body.idCargo,
            sexo: req.body.sexo,
            idMunicipio: req.body.idMunicipio,
            numeroInterior: req.body.numeroInterior,
            numeroExterior: req.body.numeroExterior,
            direcccion: req.body.direcccion
        }

        modelUsuario.updateUser(user, (data) => {
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



module.exports = {
    inicioSesionUsuario,
    registrarUsuario,
    consultUser,
    updateUser
}