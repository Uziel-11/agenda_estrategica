const bd= require("../configMysql");

module.exports = {
    consultOrdenesDiaActSeguimientoArchivo: (callback)=>{
        let sql = 'SELECT * FROM ordendia_actividad_seguimiento_archivos'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaActSeguimientoArchivoPorId: (id,callback)=>{
        let sql = 'SELECT * FROM ordendia_actividad_seguimiento_archivos WHERE id = ?'
        bd.query(sql,id, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaActSeguimientoArchivoPorParametro:(param, callback) => {
        let sql = 'SELECT * FROM ordendia_actividad_seguimiento_archivos WHERE '+ param[0] + ' = ?';
        db.query(sql,param[1], (err, data) => {
            if (err) throw err
            return callback(data)
        })
    },


    insertOrdenDiaActSeguimientoArchivo: (ordenDiaActSeguimiento,callback)=>{
        let sql = 'INSERT INTO ordendia_actividad_seguimiento_archivos SET ?'
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

    deleteOrdenDiaActSeguimientoArchivo: (id,callback)=>{
        let sql = 'DELETE FROM ordendia_actividad_seguimiento_archivos WHERE id = ?'
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


    updateOrdenDiaActSeguimientoArchivo:(ordenDiaActSeguimientoArchivo,callback)=>{
        const datOrdenDiaActSeguimientoArchivo = [
            ordenDiaActSeguimientoArchivo.tipoArchivo,
            ordenDiaActSeguimientoArchivo.nombreArchivo,
            ordenDiaActSeguimientoArchivo.peso,
            ordenDiaActSeguimientoArchivo.fechaCreo,
            ordenDiaActSeguimientoArchivo.idCreo,
            ordenDiaActSeguimientoArchivo.idSeguimiento,
            ordenDiaActSeguimientoArchivo.id]
        let sql = ('UPDATE ordendia_actividad_seguimiento_archivos SET tipoArchivo = ?,nombreArchivo = ?,peso= ?,fechaCreo= ?, idCreo=?,idSeguimiento=? WHERE id= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datOrdenDiaActSeguimientoArchivo,(err,data)=>{
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
