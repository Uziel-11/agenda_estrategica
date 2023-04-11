const bd = require('../configMysql')

module.exports = {


    insertarCargo: (cargo,callback)=>{
        let sql = 'INSERT INTO cat_cargo SET ?'
        bd.query(sql,cargo,(err,data)=>{
            if (err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    consultCargo: (callback)=>{
        let sql = 'SELECT * FROM cat_cargo'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    updateCargo:(cargo,callback)=>{
        const datoCargo = [
            cargo.cargo,cargo.id]
        let sql = ('UPDATE cat_cargo SET cargo = ? WHERE id= ?');
        bd.query(sql,datoCargo,(err,data)=>{
            if(err)
                return callback(null)
            else
                return callback(data)
        })
    },

    deleteCargo: (id,callback)=>{
        let sql = 'DELETE FROM cat_cargo WHERE id = ?'
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