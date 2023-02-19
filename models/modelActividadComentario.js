const db = require('../configMysql')

module.exports = {

    crearComentario: (comentario, callback) => {
        let sql = 'INSERT INTO actividad_comentario SET ?'
        db.query(sql, comentario, (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    eliminarComentario: (id, callback) => {
        let sql = 'DELETE FROM actividad_comentario WHERE id = ?';

        db.query(sql, id, (err, data) =>{
            if (err) throw err;
            return callback(data);
        })
    },


    actualizarComentario: (comentario, callback) => {
        let sql = 'UPDATE actividad_comentario SET comentario = ?, idActividad = ?, idUsuarioCreo = ?, fechaCreo = ? WHERE id = ?';
        db.query(sql, [comentario.comentario, comentario.idActividad, comentario.idUsuarioCreo, comentario.fechaCreo, comentario.id], (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    leercomentarios: (callback) => {
        let sql = 'SELECT * FROM actividad_comentario';

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