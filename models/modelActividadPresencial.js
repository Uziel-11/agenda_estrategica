const db = require('../configMysql')

module.exports = {

    crearActPresencial: (datos, callback) => {
        let sql = 'INSERT INTO actividad_presencial SET ?'
        db.query(sql, datos, (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    eliminarActPresencial: (id, callback) => {
        let sql = 'DELETE FROM actividad_presencial WHERE id = ?';

        db.query(sql, id, (err, data) =>{
            if (err) throw err;
            return callback(data);
        })
    },


    actualizarActPresencial: (datos, callback) => {
        let sql = 'UPDATE actividad_presencial SET idActividad = ?, lugar = ?, colonia = ?, numeroInterior = ?, numeroInterior = ?, calle = ?, latitud = ?, longitud = ?, codigoPostal = ?, idUsuarioCreo = ?, fechaCreo = ?, idUsuarioActualizo = ?, fechaActualizo = ? WHERE id = ?';
        db.query(sql, [datos.idActividad, datos.lugar, datos.colonia, datos.numeroInterior, datos.numeroExterior, datos.calle, datos.latitud, datos.longitud, datos.codigoPostal, datos.idUsuarioCreo, datos.fechaCreo, datos.idUsuarioActualizo, datos.fechaActualizo], (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    leerActPresencial: (callback) => {
        let sql = 'SELECT * FROM actividad_presencial';

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