const bd= require("../configMysql");

module.exports = {
    consultOrdenesDiaActividad: (callback)=>{
        let sql = 'SELECT * FROM ordendia_actividades'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaActividadPorId: (id,callback)=>{
        let sql = 'SELECT * FROM ordendia_actividades WHERE id = ?'
        bd.query(sql,id, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaActividadPorParametro:(param, callback) => {
        let sql = 'SELECT * FROM ordendia_actividades WHERE '+ param[0] + ' = ?';
        db.query(sql,param[1], (err, data) => {
            if (err) throw err
            return callback(data)
        })
    },


    insertOrdenDiaActividad: (ordenDiaActividad,callback)=>{
        let sql = 'INSERT INTO ordendia_actividades SET ?'
        bd.query(sql,ordenDiaActividad,(err,data)=>{

            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteOrdenDiaActividad: (id,callback)=>{
        let sql = 'DELETE FROM ordendia_actividades WHERE id = ?'
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


    updateOrdenDiaActividad:(ordenDiaActividad,callback)=>{
        const datoOrdenDiaActividad = [
            ordenDiaActividad.idOrdenDia,
            ordenDiaActividad.horaInicio,
            ordenDiaActividad.actividad,
            ordenDiaActividad.fechaLimite,
            ordenDiaActividad.idStatus,
            ordenDiaActividad.idUsuarioCreo,
            ordenDiaActividad.fechaCreo,
            ordenDiaActividad.idUsuarioActualizo,
            ordenDiaActividad.fechaActualizo,
            ordenDiaActividad.id]
        let sql = ('UPDATE ordendia_actividades SET idOrdenDia = ?,horaInicio = ?,actividad= ?,fechaLimite= ?,idStatus=?,idUsuarioCreo=?,fechaCreo=?,idUsuarioActualizo=?,fechaActualizo=? WHERE id= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datoOrdenDiaActividad,(err,data)=>{
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

