const db = require('../configMysql')

module.exports = {

    crearActPresencial: (presencial, callback) => {
        let sql = 'INSERT INTO actividad_presencial SET ?'
        db.query(sql, presencial, (err, data) => {
            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    eliminarActPresencial: (idActividad, callback) => {
        let sql = 'DELETE FROM actividad_presencial WHERE idActividad = ?';

        db.query(sql, idActividad, (err, data) =>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
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