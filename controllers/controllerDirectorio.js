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

const filtro = (req, res) => {
    let sentencia = []
    sentencia.push('SELECT * FROM directorio WHERE')

    for (var i = 0; i < req.body.filtro.length; i++){
        if (req.body.filtro[i]['inheritTypeFilter'] === 'NOT'){
            sentencia.push(req.body.filtro[i]['inheritTypeFilter'])
            sentencia.push(req.body.filtro[i]['id'])
            sentencia.push(req.body.filtro[i]['filter'])
            sentencia.push("\'" + req.body.filtro[i]['value'] + "\'")
            sentencia.push(req.body.filtro[i]['inheritTypeFilter2'])
        }else {
            sentencia.push(req.body.filtro[i]['id'])
            sentencia.push(req.body.filtro[i]['filter'])
            sentencia.push("\'" + req.body.filtro[i]['value'] + "\'")
            sentencia.push(req.body.filtro[i]['inheritTypeFilter'])
        }
    }
    let sql = sentencia.join(' ')
    console.log(sql)
    modelDirectorio.consultUserDirectorioPorParametro(sql, (data) => {
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
        console.log(elementosJson[e]['id']+elementosJson[e]['filter']+elementosJson[e]['value'])
        if(cantObjetos==1) {
            if(typeof elementosJson[e]['value'] == "string" && elementosJson[e]['filter']=="="){
                sql = 'SELECT * FROM directorio WHERE ' + elementosJson[e]['id'] +' LIKE '+'?';
                datosEvaluar.push(elementosJson[e]['value']+'%')

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
            }else {
                sql = 'SELECT * FROM directorio WHERE ' + elementosJson[e]['id'] +elementosJson[e]['filter']+ '?';
                datosEvaluar.push(elementosJson[e]['value'])

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

        }else if(cantObjetos == 2 && elementosJson[e]['inheritFilterType'] == "AND" || elementosJson[e]['inheritFilterType'] == "and"){
            e=1;
            sql = 'SELECT * FROM directorio WHERE '+elementosJson[e-1]['id']+elementosJson[e-1]['filter']+'?'+' AND '+elementosJson[e]['id']+elementosJson[e]['filter']+' ? ';

            datosEvaluar.push(elementosJson[e-1]['value'])
            datosEvaluar.push(elementosJson[e]['value'])
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
        }else if (cantObjetos == 2 && elementosJson[e]['inheritFilterType'] == "OR" || elementosJson[e]['inheritFilterType'] == "or"){
            e=1;
            console.log("cantidad de objetos", cantObjetos)
            sql = 'SELECT * FROM directorio WHERE '+elementosJson[e-1]['id']+elementosJson[e-1]['filter']+'?'+' OR '+elementosJson[e]['id']+elementosJson[e]['filter']+' ? ';

            datosEvaluar.push(elementosJson[e-1]['value'])
            datosEvaluar.push(elementosJson[e]['value'])
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
    })
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
    updateUserDirectorio,
    filtro
}