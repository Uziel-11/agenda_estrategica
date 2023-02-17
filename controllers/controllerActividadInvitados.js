const modelActividadInvitados = require('../models/modelActividadInvitados');

const crearInvitado = (req, res) => {
    const invitado = {
        idDirectorio: req.body.idDirectorio,
        idActividad: req.body.idActividad,
        isConfirmado: req.body.isConfirmado,
        fechaConfirmo: req.body.fechaConfirmo
    }

    modelActividadInvitados.crearInvitado(invitado, (data) => {
        res.send({
            status: true,
            message: 'The Message is added correctly'
        })
    }, err => {
        res.send({
            status: false,
            message: 'The Message was not added'
        })
    })
}

const leerInvitados = (req, res) => {
    modelActividadInvitados.leerInvitados((data) => {
        if (data != null){
            res.send({
                status: true,
                data: data
            })
        }else {
            res.send({
                status: false,
                message: "Data Base is empty"
            })
        }
    })
}

const eliminarInvitado = (req, res) => {
    modelActividadInvitados.eliminarInvitado(req.params.id, (data) =>{
        res.send({
            status: true,
            message: "Was deleted correctly" + req.params.id
        })
    }, err => {
        res.send({
            status: false,
            message: "Was deleted incorrect" + err
        })
    })
}

const actualizarInvitado = (req, res) => {
    let invitado = {
        id: req.params.id,
        idDirectorio: req.body.idDirectorio,
        idActividad: req.body.idActividad,
        isConfirmado: req.body.isConfirmado,
        fechaConfirmo: req.body.fechaConfirmo
    }

    modelActividadInvitados.actualizarInvitado(invitado, (data) =>{
        res.send({
            status: true,
            message: "Was updated correctly"
        })
    }, err => {
        res.send({
            status: false,
            message: "Was updated incorrect"
        })
    })
}


module.exports = {

    crearInvitado,
    actualizarInvitado,
    eliminarInvitado,
    leerInvitados
}