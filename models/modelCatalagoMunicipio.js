const bd = require('../configMysql')

module.exports = {


    insertarMunicipio: (municipio,callback)=>{
        let sql = 'INSERT INTO cat_municipio SET ?'
        bd.query(sql,municipio,(err,data)=>{
            if (err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    consultMunicipio: (callback)=>{
        let sql = 'SELECT * FROM cat_municipio'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    updateMunicipio:(municipio,callback)=>{
        const datoMunicipio = [
            municipio.municipio,municipio.id]
        let sql = ('UPDATE cat_municipio SET municipio = ? WHERE id= ?');
        bd.query(sql,datoMunicipio,(err,data)=>{
            if(err)
                return callback(null)
            else
                return callback(data)
        })
    },

    deleteMunicipio: (id,callback)=>{
        let sql = 'DELETE FROM cat_municipio WHERE id = ?'
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
}