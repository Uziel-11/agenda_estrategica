const db = require('../configMysql');

module.exports = {

    crearInvitado: (invitado, callback) => {
        let sql = 'INSERT INTO actividad_invitados SET ?'
        db.query(sql, invitado, (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    eliminarInvitado: (id, callback) => {
        let sql = 'DELETE FROM actividad_invitados WHERE id = ?';

        db.query(sql, id, (err, data) =>{
            if (err) throw err;
            return callback(data);
        })
    },

    actualizarInvitado: (invitado, callback) => {
        let sql = 'UPDATE actividad_invitados SET idDirectorio = ?, idActividad = ?, isConfirmado = ?, fechaConfirmo = ? WHERE id = ?';
        db.query(sql, [invitado.idDirectorio, invitado.idActividad, invitado.isConfirmado, invitado.fechaConfirmo], (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    leerInvitados: (callback) => {
        let sql = 'SELECT * FROM actividad_invitados';

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