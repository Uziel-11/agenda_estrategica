const db = require('../configMysql')

module.exports = {

    crearArchivo: (archivo, callback) => {
        let sql = 'INSERT INTO actividad_comentarios_archivo SET ?'
        db.query(sql, archivo, (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    eliminarArchivo: (id, callback) => {
        let sql = 'DELETE FROM actividad_comentarios_archivo WHERE id = ?';

        db.query(sql, id, (err, data) =>{
            if (err) throw err;
            return callback(data);
        })
    },

    actualizarArchivo: (archivo, callback) => {
        let sql = 'UPDATE actividad_comentarios_archivo SET nombre = ?, tipoArchivo = ?, url = ?, peso = ?, idActividadComentario = ? WHERE id = ?';
        db.query(sql, [archivo.nombre, archivo.tipoArchivo, archivo.url, archivo.peso, archivo.idActividadComentario], (err, data) => {
            if (err) throw err;
            return callback(data);
        })
    },

    leerArchivos: (callback) => {
        let sql = 'SELECT * FROM actividad_comentarios_archivo';

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