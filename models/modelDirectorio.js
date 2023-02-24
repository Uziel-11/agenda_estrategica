const bd= require("../configMysql");

module.exports = {
    consultDirectorio: (callback)=>{
        let sql = 'SELECT * FROM directorio'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultDirectorioPorId: (id,callback)=>{
        let sql = 'SELECT * FROM directorio WHERE id = ?'
        bd.query(sql,id, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultUserDirectorioPorParametro:(sql,datosEvaluar,callback) => {

        bd.query(sql,datosEvaluar, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    consultUserDirectorioPorParametroTwo:(sql,value,valueTwo,callback) => {

        bd.query(sql,value,valueTwo, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },


    insertDirectorio: (usuarioDirectorio,callback)=>{
        let sql = 'INSERT INTO directorio SET ?'
        bd.query(sql,usuarioDirectorio,(err,data)=>{
            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteUserDirectorio: (id,callback)=>{
        let sql = 'DELETE FROM directorio WHERE id = ?'
        bd.query(sql,id,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    updateUserDirectorio:(usuarioDirectorio,callback)=>{
        const datousuarioDirectorio = [usuarioDirectorio.nombre,usuarioDirectorio.apellidoPaterno,usuarioDirectorio.apellidoMaterno,usuarioDirectorio.celular,usuarioDirectorio.correo,usuarioDirectorio.fechaCumpleanio,usuarioDirectorio.area,usuarioDirectorio.organizacion,usuarioDirectorio.idMunicipio,usuarioDirectorio.sexo,usuarioDirectorio.idCargo,usuarioDirectorio.numeroInterior,usuarioDirectorio.numeroExterior,usuarioDirectorio.idUsuario,usuarioDirectorio.curp,usuarioDirectorio.departamento,usuarioDirectorio.ciudad,usuarioDirectorio.estado,usuarioDirectorio.codigoPostal,usuarioDirectorio.id]
        let sql = ('UPDATE directorio SET nombre = ?,apellidoPaterno = ?,apellidoMaterno= ?,celular= ?,correo=?,fechaCumpleanio=?,area=?,organizacion=?,idMunicipio=?,sexo=?,idCargo=?,numeroInterior=?,numeroExterior=?,idUsuario=?,curp=?,departamento=?,ciudad=?,estado=?,codigoPostal=? WHERE id= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datousuarioDirectorio,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)

            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },
}