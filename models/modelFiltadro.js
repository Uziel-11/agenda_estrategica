const db = require('../configMysql')


module.exports = {
    filtroUsuarios:(sql, callback) => {
        db.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
}