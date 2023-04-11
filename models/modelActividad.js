const db = require("../configMysql")


module.exports = {

    crearActividad: (actividad, callback) => {
        let sql = 'INSERT INTO actividad SET ?'
        db.query(sql, actividad, (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    eliminarActividad: (idActividad, callback) => {
        let sql = 'DELETE FROM actividad WHERE id = ?';

        db.query(sql, idActividad, (err, data) => {
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    leerActividadPorId: (id, callback) => {
        let sql = 'SELECT idModalidad FROM actividad WHERE id = ?';

        db.query(sql, id, (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    actualizarActividad: (actividad, callback) => {
        let sql = 'UPDATE actividad SET titulo = ?, fechaInicio = ?, fechaFinal = ?, horaInicio = ?, horaFinal = ?, descripcion = ?, vestimenta = ?, objetivo = ?, tiempoRecordatorio = ?, idUsuarioCreo = ?, fechaCreo = ?, idStatus = ?, idModalidad = ?, idTipoActividad = ?, idUsuarioActualizo = ?, fechaActualizo = ? WHERE id = ?';
        db.query(sql, [actividad.titulo, actividad.fechaInicio, actividad.fechaFinal, actividad.horaInicio, actividad.horaFinal, actividad.descripcion, actividad.vestimenta, actividad.objetivo, actividad.tiempoRecordatorio, actividad.idUsuarioCreo, actividad.fechaCreo, actividad.idStatus, actividad.idModalidad, actividad.idTipoActividad, actividad.idUsuarioActualizo, actividad.fechaActualizo, actividad.id], (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    leerActividades: (callback) => {
        let sql = 'SELECT * FROM actividad';

        db.query(sql, (err, data) => {
            if (err) throw err;
            if (data != null) {
                return callback(data)
            } else {
                return callback(null)
            }
        })
    },

    leerActividadPorParametro: (param, callback) => {
        let sql = 'SELECT * FROM actividad WHERE ' + param[0] + ' = ?';
        console.log(sql, param[1])
        db.query(sql, param[1], (err, data) => {
            if (err) throw err
            return callback(data)
        })
    },

    consultIdActividad: (titulo, callback) => {
        let sql = 'SELECT id FROM actividad WHERE titulo = ?';
        db.query(sql, titulo, (err, data) => {
            if (err) throw err
            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    },

    leerActividadPorIdUsuario: (idUsuarioCreo, callback) => {
        let sql = 'SELECT titulo AS title, CONCAT(DATE_FORMAT(fechaInicio, \'%Y-%m-%d\'),"T",horaInicio) AS start, CONCAT(DATE_FORMAT(fechaFinal, \'%Y-%m-%d\'),"T",horaFinal) AS end FROM actividad WHERE idUsuarioCreo = ?'
        db.query(sql, idUsuarioCreo, (err, data) => {
            if (err) throw err
            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    }
}