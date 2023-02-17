const db = require('../configMysql')

module.exports = {

    crearActVirtual: (datos, callback) => {
        let sql = 'INSERT INTO actividad_virtual SET ?'
        db.query(sql, datos, (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    eliminarActVirtual: (id, callback) => {
        let sql = 'DELETE FROM actividad_virtual WHERE id = ?';

        db.query(sql, id, (err, data) =>{
            if (err) throw err;
            return callback(data);
        })
    },


    actualizarActVirtual: (datos, callback) => {
        let sql = 'UPDATE actividad_virtual SET idActividad = ?, link = ?, producto = ?, idUsuarioCreo = ?, fechaCreo = ?, idUsuarioActualizo = ?, fechaActualizo = ? WHERE id = ?';
        db.query(sql, [datos.idActividad, datos.link, datos.producto, datos.idUsuarioCreo, datos.fechaCreo, datos.idUsuarioActualizo, datos.fechaActualizo], (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    leerActVirtual: (callback) => {
        let sql = 'SELECT * FROM actividad_virtual';

        db.query(sql, (err, data) =>{
            if (err) throw err;
            if (data != null){
                return callback(data)
            }else {
                return callback(null)
            }
        })
    }

}