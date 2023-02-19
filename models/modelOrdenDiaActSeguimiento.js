const bd= require("../configMysql");

module.exports = {
    consultOrdenesDiaActSeguimiento: (callback)=>{
        let sql = 'SELECT * FROM ordendia_actividades_seguimiento'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaActSeguimientoPorId: (id,callback)=>{
        let sql = 'SELECT * FROM ordendia_actividades_seguimiento WHERE id = ?'
        bd.query(sql,id, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaActSeguimientoPorParametro:(param, callback) => {
        let sql = 'SELECT * FROM ordendia_actividades_seguimiento WHERE '+ param[0] + ' = ?';
        db.query(sql,param[1], (err, data) => {
            if (err) throw err
            return callback(data)
        })
    },


    insertOrdenDiaActSeguimiento: (ordenDiaActSeguimiento,callback)=>{
        let sql = 'INSERT INTO ordendia_actividades_seguimiento SET ?'
        bd.query(sql,ordenDiaActSeguimiento,(err,data)=>{

            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteOrdenDiaActSeguimiento: (id,callback)=>{
        let sql = 'DELETE FROM ordendia_actividades_seguimiento WHERE id = ?'
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


    updateOrdenDiaActSeguimiento:(ordenDiaActSeguimiento,callback)=>{
        const datOrdenDiaActSeguimiento = [
            ordenDiaActSeguimiento.idOrdenDiaActividad,
            ordenDiaActSeguimiento.idUsuario,
            ordenDiaActSeguimiento.comentario,
            ordenDiaActSeguimiento.fechaCreo,
            ordenDiaActSeguimiento.id]
        let sql = ('UPDATE ordendia_actividades_seguimiento SET idOrdenDiaActividad = ?,idUsuario = ?,comentario= ?,fechaCreo= ? WHERE id= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datOrdenDiaActSeguimiento,(err,data)=>{
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

