const bd= require("../configMysql");

module.exports = {
    consultOrdenesDiaActividad: (callback)=>{
        let sql = 'SELECT * FROM ordenDia'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaActividadPorId: (id,callback)=>{
        let sql = 'SELECT * FROM ordenDia WHERE id = ?'
        bd.query(sql,id, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaActividadPorParametro:(param, callback) => {
        let sql = 'SELECT * FROM ordenDia WHERE '+ param[0] + ' = ?';
        db.query(sql,param[1], (err, data) => {
            if (err) throw err
            return callback(data)
        })
    },


    insertOrdenDiaActividad: (ordenDia,callback)=>{
        let sql = 'INSERT INTO ordenDia SET ?'
        bd.query(sql,ordenDia,(err,data)=>{
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
        let sql = 'DELETE FROM ordenDia WHERE id = ?'
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


    updateOrdenDiaActividad:(ordenDia,callback)=>{
        const datoordenDia = [ordenDia.asuntoOrdenDia,ordenDia.idActividad,ordenDia.idUsuarioResponsable,ordenDia.hora,ordenDia.idStatus,ordenDia. idUsuarioCreo,ordenDia.fechaCreo,ordenDia.idUsuarioActualizo,ordenDia.fechaActualizo,ordenDia.id]
        let sql = ('UPDATE ordenDia SET asuntoOrdenDia = ?,idActividad = ?,idUsuarioResponsable= ?,hora= ?,idStatus=?,idUsuarioCreo=?,fechaCreo=?,idUsuarioActualizo=?,fechaActualizo=? WHERE id= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datoordenDia,(err,data)=>{
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

