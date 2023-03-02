const modelFiltrado = require("../models/modelFiltadro")

const filtroDatos = (req, res) => {

    if(req.body.filtro.length > 0){
        let sentencia = []
        let table = req.body.filtro[0]['table'];

        sentencia.push('SELECT * FROM '+ table +' WHERE')

        for (var i = 0; i < req.body.filtro.length; i++){
            if (req.body.filtro[i]['inheritTypeFilter'] === 'NOT'){
                sentencia.push(req.body.filtro[i]['inheritTypeFilter'])
                sentencia.push(req.body.filtro[i]['id'])
                sentencia.push(req.body.filtro[i]['filter'])
                sentencia.push("\'" + req.body.filtro[i]['value'] + "\'")
                sentencia.push(req.body.filtro[i]['inheritTypeFilter2'])
            }else {
                sentencia.push(req.body.filtro[i]['id'])
                sentencia.push(req.body.filtro[i]['filter'])
                sentencia.push("\'" + req.body.filtro[i]['value'] + "\'")
                sentencia.push(req.body.filtro[i]['inheritTypeFilter'])
            }
        }
        let sql = sentencia.join(' ')
        console.log(sql)
        modelFiltrado.filtroUsuarios(sql, (data) => {
            if (data != null) {
                res.send({
                    status: true,
                    data: data
                })
            } else {
                res.send({
                    status: false,
                    message: "No hay datos con esa conincidencia"
                })
            }
        })
    }else {
        res.send({
            status: false,
            message: "Error no hay condiciones"
        })
    }
}

module.exports = {
    filtroDatos
}