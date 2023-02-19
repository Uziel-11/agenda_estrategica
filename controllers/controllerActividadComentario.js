const modelActividadComentario = require('../models/modelActividadComentario');
const {nuevoComentario, actializarComentario} = require('../schemas/schemaActividadComentario')
const crearComentario = (req, res) => {
    const error = nuevoComentario(req.body)
    if (error){
        console.log(error.details)
        return res.send(error.details)
    }else {
        const comentario = {
            comentario: req.body.comentario,
            idActividad: req.body.idActividad,
            idUsuarioCreo: req.body.idUsuarioCreo,
            fechaCreo: req.body.fechaCreo
        }

        modelActividadComentario.crearComentario(comentario, (data) => {
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
}

const leerComentarios = (req, res) => {
  modelActividadComentario.leercomentarios((data) => {
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

const eliminarComentario = (req, res) => {
  modelActividadComentario.eliminarComentario(req.params.id, (data) =>{
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

const actualizarComentario = (req, res) => {
    let comentario = {
        id: req.params.id,
        comentario: req.body.comentario,
        idActividad: req.body.idActividad,
        idUsuarioCreo: req.body.idUsuarioCreo,
        fechaCreo: req.body.fechaCreo
    }

    modelActividadComentario.actualizarComentario(comentario, (data) =>{
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
    crearComentario,
    leerComentarios,
    eliminarComentario,
    actualizarComentario
}
