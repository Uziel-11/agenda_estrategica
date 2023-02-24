const modelDirectorio = require("../models/modelDirectorio")
const {insertarUsuarioDirectorio} = require('../schemas/schemaDirectorio')
const {actualizarUserDirectorio} = require('../schemas/schemaDirectorio');

const consultDirectorio = (req,res)=>{
    modelDirectorio.consultDirectorio((data)=>{
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

const consultDirectorioPorId = (req,res)=>{
    const id = req.body.id
    modelDirectorio.consultDirectorioPorId(id, (data)=>{
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

const consultUserDirectorioPorParametro = (req, res) => {
    //obtenemos el array de objetos llamado filtro
    const objectsJson = req.body
    const  elementosJson = (objectsJson['filtro'])

    //definimos la cantidad de objetos que contiene el array filtro
    const cantObjetos = Object.keys(elementosJson).length;
    console.log("cantidad: ",cantObjetos)


    let condicion = []
    let sql=''
    let datosEvaluar =[]

    //Accedemos a los parametros de acuerdo al numero de objetos
    Object.keys(elementosJson).forEach(e=>{
        //guardamos los objetos que vendrian siendo las condiciones
        condicion.push(elementosJson[e])
        //console.log(elementosJson[e])
    })


    for (let i = 0; i < condicion.length; i++) {
        if(cantObjetos==1) {
            sql = 'SELECT * FROM directorio WHERE ' + condicion[i]['id'] + condicion[i]['filter'] + '?';
            datosEvaluar.push(condicion[i]['value'])
            modelDirectorio.consultUserDirectorioPorParametro(sql, datosEvaluar,(data) => {
                if (data != null) {
                    res.send({
                        status: true,
                        data: data
                    })
                } else {
                    res.send({
                        status: false,
                        message: "Ningun dato"
                    })
                }
            })
        }else if(cantObjetos == 2 && condicion[i]['inheritFilterType'] == "AND" || condicion[i]['inheritFilterType'] == "and"){
            i=1;
            sql = 'SELECT * FROM directorio WHERE '+condicion[i-1]['id']+condicion[i-1]['filter']+'?'+' AND '+condicion[i]['id']+condicion[i]['filter']+' ? ';

            datosEvaluar.push(condicion[i-1]['value'])
            datosEvaluar.push(condicion[i]['value'])
            console.log(datosEvaluar)

            modelDirectorio.consultUserDirectorioPorParametro(sql, datosEvaluar,(data) => {
                if (data != null) {
                    res.send({
                        status: true,
                        data: data
                    })
                } else {
                    res.send({
                        status: false,
                        message: "Ningun dato"
                    })
                }
            })
        }else if (cantObjetos == 2 && condicion[i]['inheritFilterType'] == "OR" || condicion[i]['inheritFilterType'] == "or"){
            i=1;
            console.log("cantidad de objetos", cantObjetos)
            sql = 'SELECT * FROM directorio WHERE '+condicion[i-1]['id']+condicion[i-1]['filter']+'?'+' OR '+condicion[i]['id']+condicion[i]['filter']+' ? ';

            datosEvaluar.push(condicion[i-1]['value'])
            datosEvaluar.push(condicion[i]['value'])
            console.log(datosEvaluar)

            modelDirectorio.consultUserDirectorioPorParametro(sql, datosEvaluar,(data) => {
                if (data != null) {
                    res.send({
                        status: true,
                        data: data
                    })
                } else {
                    res.send({
                        status: false,
                        message: "Ningun dato"
                    })
                }
            })
        }
        //i=condicion.length;
    }
    //console.log("sale del for")
}


const insertUsuarioDirectorio = (req,res) =>{
    console.log("Insertando usuario en el directorio")

    const {error, value} = insertarUsuarioDirectorio(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const usuarioDirectorio = {
            id: req.body.id,
            nombre: req.body.nombre,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            celular: req.body.celular,
            correo: req.body.correo,
            fechaCumpleanio: req.body.fechaCumpleanio,
            area: req.body.area,
            organizacion: req.body.organizacion,
            idMunicipio: req.body.idMunicipio,
            sexo: req.body.sexo,
            idCargo: req.body.idCargo,
            numeroInterior: req.body.numeroInterior,
            numeroExterior: req.body.numeroExterior,
            idUsuario: req.body.idUsuario,
            curp: req.body.curp,
            departamento: req.body.departamento,
            ciudad: req.body.ciudad,
            estado: req.body.estado,
            codigoPostal: req.body.codigoPostal
        }
        modelDirectorio.insertDirectorio(usuarioDirectorio, (data) => {
            res.send({
                status: true,
                message: "El usuario del directorio se añadio correctamente"
            })
        }, err => {
            res.send({
                status: false,
                message: "El usuario del directorio no se añadio "
            })
        })
    }
}

const deleteUserDirectorio = (req, res) =>{

    const id = req.body.id
    modelDirectorio.deleteUserDirectorio(id,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'usuario eliminado exitosamente del directorio'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar el usuario del directorio'
            })
        }
    })
}

const updateUserDirectorio = (req, res) =>{
    const {error, value} = actualizarUserDirectorio(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {

        const usuarioDirectorio = {
            id: req.body.id,
            nombre: req.body.nombre,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            celular: req.body.celular,
            correo: req.body.correo,
            fechaCumpleanio: req.body.fechaCumpleanio,
            area: req.body.area,
            organizacion: req.body.organizacion,
            idMunicipio: req.body.idMunicipio,
            sexo: req.body.sexo,
            idCargo: req.body.idCargo,
            numeroInterior: req.body.numeroInterior,
            numeroExterior: req.body.numeroExterior,
            idUsuario: req.body.idUsuario,
            curp: req.body.curp,
            departamento: req.body.departamento,
            ciudad: req.body.ciudad,
            estado: req.body.estado,
            codigoPostal: req.body.codigoPostal
        }

        modelDirectorio.updateUserDirectorio(usuarioDirectorio, (data) => {
            res.send({
                status: true,
                message: "El usuario del directorio ha sido actualizado correctamente"
            })
        }, err => {
            res.send({
                status: false,
                message: "Ocurrio un problema al actualizar los datos del usuario del directorio "
            })
        })
    }
}


module.exports = {
    consultDirectorio,
    consultDirectorioPorId,
    consultUserDirectorioPorParametro,
    insertUsuarioDirectorio,
    deleteUserDirectorio,
    updateUserDirectorio
}