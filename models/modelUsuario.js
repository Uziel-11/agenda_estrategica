const bd = require('../configMysql')

module.exports = {
    inicioSesionUsuario: (userName, password, callback) => {
        //Checamos si el username y password existen
        let sql = 'SELECT * FROM usuario WHERE userName=? and password=? '
        bd.query(sql,[userName, password],(err, data) => {
            if (err) throw err //si hay error se da a mostrar
            if (data.length>0)  //si la sentencia sql es >0 entonces el usuario existe y lo retornamos
                callback(data[0])
            else
                //si no hay data enviamos null
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