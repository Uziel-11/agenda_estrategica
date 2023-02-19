const bd= require("../configMysql");
const {updateOrdenDiaDocumento} = require("../controllers/controllerOrdeDiaDocumento");

module.exports = {
    consultOrdenesDiaDocumento: (callback)=>{
        let sql = 'SELECT * FROM ordendia_documento'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenDiaDocumentoPorId: (id,callback)=>{
        let sql = 'SELECT * FROM ordendia_documento WHERE id = ?'
        bd.query(sql,id, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    consultOrdenesDiaDocumentoPorParametro:(param, callback) => {
        let sql = 'SELECT * FROM ordendia_documento WHERE '+ param[0] + ' = ?';
        db.query(sql,param[1], (err, data) => {
            if (err) throw err
            return callback(data)
        })
    },


    insertOrdenDiaDocumento: (ordenDiaDocumento,callback)=>{
        let sql = 'INSERT INTO ordendia_documento SET ?'
        bd.query(sql,ordenDiaDocumento,(err,data)=>{

            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteOrdenDiaDocumento: (id,callback)=>{
        let sql = 'DELETE FROM ordendia_documento WHERE id = ?'
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


    updateOrdenDiaDocumento:(ordenDiaDocumento,callback)=>{
        const datOrdenDiaActSeguimiento = [
            ordenDiaDocumento.nombre,
            ordenDiaDocumento.tipoDocumento,
            ordenDiaDocumento.url,
            ordenDiaDocumento.idOrdenDia,
            ordenDiaDocumento.id]
        let sql = ('UPDATE ordendia_documento SET nombre = ?,tipoDocumento = ?,url= ?,idOrdenDia= ? WHERE id= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datOrdenDiaActSeguimiento,(err,data)=>{
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
