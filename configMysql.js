const mysql = require('mysql')
const config = {
    host: 'localhost',
    port: '3306',
    user: 'agenda',
    database: 'agenda_estrategica',
    password: 'perezlopez11'
}

const conn = mysql.createConnection(config)

conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully!!!!')
})

module.exports = conn;