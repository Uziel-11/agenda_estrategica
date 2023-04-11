const bd = require("../configMysql");

module.exports = {

    crearActVirtual: (virtual, callback) => {
        let sql = 'INSERT INTO actividad_virtual SET ?';
        bd.query(sql,virtual,(err,data)=>{
            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },



    eliminarActVirtual: (idActividad, callback) => {
        let sql = 'DELETE FROM actividad_virtual WHERE idActividad = ?';

        bd.query(sql, idActividad, (err, data) =>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },


    actualizarActVirtual: (datos, callback) => {
        let sql = 'UPDATE actividad_virtual SET idActividad = ?, link = ?, producto = ?, idUsuarioCreo = ?, fechaCreo = ?, idUsuarioActualizo = ?, fechaActualizo = ? WHERE id = ?';
        bd.query(sql, [datos.idActividad, datos.link, datos.producto, datos.idUsuarioCreo, datos.fechaCreo, datos.idUsuarioActualizo, datos.fechaActualizo], (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    leerActVirtual: (callback) => {
        let sql = 'SELECT * FROM actividad_virtual';

        bd.query(sql, (err, data) =>{
            if (err) throw err;
            if (data != null){
                return callback(data)
            }else {
                return callback(null)
            }
        })
    }

}