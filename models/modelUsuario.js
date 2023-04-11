const bd = require('../configMysql')

module.exports = {

    inicioSesionUsuario: (correo, password, callback) => {
        //Checamos si el username y password existen
        let sql = 'SELECT * FROM usuario WHERE correo=? and password=? '
        bd.query(sql,[correo, password],(err, data) => {

            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    insertarUsuario: (user,callback)=>{
        let sql = 'INSERT INTO usuario SET ?'
        bd.query(sql,user,(err,data)=>{
            if (err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    consultUser: (callback)=>{
        let sql = 'SELECT * FROM usuario'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultUserId: (correo, callback) => {
        let sql = 'SELECT id FROM usuario WHERE correo=?'

        bd.query(sql,correo,(err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    updateUser:(user,callback)=>{
        const datoUser = [
            user.nombre,user.apellidoPaterno,user.apellidoMaterno,user.celular,user.curp,user.correo,user.fechaCumpleanio,user.area,user.organizacion,user.userName,user.password,user.idCargo,user.sexo,user.idMunicipio,user.numeroInterior,user.numeroExterior,user.direcccion,user.id]
        let sql = ('UPDATE usuario SET nombre = ?,apellidoPaterno = ?,apellidoMaterno= ?,celular= ?,curp=?,correo=?,fechaCumpleanio=?,area=?,organizacion=?, userName=?, password=?,idCargo=?,sexo=?,idMunicipio=?,numeroInterior=?,numeroExterior=?,direcccion=? WHERE id= ?');
        bd.query(sql,datoUser,(err,data)=>{
            if(err)
                return callback(null)

            else
                return callback(data)
        })
    },
}