const bd= require("../configMysql");

module.exports = {
    consultOrdenesDiaActUsuario: (callback)=>{
        let sql = 'SELECT * FROM ordendia_actividades_usuarios'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaActUsuarioPorId: (idOrdenDiaActividad,callback)=>{
        let sql = 'SELECT * FROM ordendia_actividades_usuarios WHERE idOrdenDiaActividad = ?'
        bd.query(sql,idOrdenDiaActividad, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaActUsuarioPorParametro:(param, callback) => {
        let sql = 'SELECT * FROM ordendia_actividades_usuarios WHERE '+ param[0] + ' = ?';
        db.query(sql,param[1], (err, data) => {
            if (err) throw err
            return callback(data)
        })
    },


    insertOrdenDiaActUsuario: (ordenDiaActUsuario,callback)=>{
        let sql = 'INSERT INTO ordendia_actividades_usuarios SET ?'
        bd.query(sql,ordenDiaActUsuario,(err,data)=>{

            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteOrdenDiaActUsuario: (deleteOrdenDiaActividad,callback)=>{
        const datOrdenDiaActividad=[
            deleteOrdenDiaActividad.idOrdenDiaActividad,
            deleteOrdenDiaActividad.idUsuario
        ]
        let sql = 'DELETE FROM ordendia_actividades_usuarios WHERE idOrdenDiaActividad = ? AND idUsuario =? '
        bd.query(sql,datOrdenDiaActividad,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },


    updateOrdenDiaActUsuario:(ordenDiaActUsuario,callback)=>{
        const datOrdenDiaActUsuario = [
            ordenDiaActUsuario.idStatus,
            ordenDiaActUsuario.comentario,
            ordenDiaActUsuario.fechaCreo,
            ordenDiaActUsuario.visto,
            ordenDiaActUsuario.fechaVisto,
            ordenDiaActUsuario.idOrdenDiaActividad,
            ordenDiaActUsuario.idUsuario,]
        let sql = ('UPDATE ordendia_actividades_usuarios SET idStatus= ?,comentario= ?,fechaCreo = ?,visto=?,fechaVisto=? WHERE idOrdenDiaActividad= ? and idUsuario =? ');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datOrdenDiaActUsuario,(err,data)=>{
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
