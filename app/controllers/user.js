const { redirect } = require('express/lib/response');
const { default: mongoose } = require('mongoose');
const model = require('../models/user');
const multer = require('multer');
const multerConfig = require('../controllers/upload2');



const upload = multer(multerConfig).single('avatar')

//pasar id a objeto mongoose
const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}
//opciones de paginacion
const option = {
    page: 1,
    limit: 3
};

//carga imagenes

exports.fileUpload = (req, res, next) => {
    upload(req, res, function(error) {

        if(error){
            res.json({message: error});

        }
        return next()
    });
};

/* OBTENER DATOS DE USUARIOS */
exports.getData = (req, res) => {
    //model.find es el normal
    model.paginate({}, option ,(err, docs) =>{
        res.send({
            items: docs
        })
    })
}

/* INSERTAR DATOS DE USUARIOS */
exports.insertData = async (req, res) => {
    const data = new  (req.body)

    console.log("esto es dara ",  req.body)
   model.create(data, (err,docs) =>{
        if(err){
            res.send({error:'error '}, 422)
        }else{
            res.send({data: docs})
        }
        //console.log("esto es dara ", data)
    } )
   // res.send({ data })

}

/* MODIFICAR DATOS*/

exports.updateSingle = (req, res) => {
    const id = req.params.id
    const body = req.body
    model.updateOne(
        { _id: parseId(req.params.id)},
        body,

    (err, docs) =>{
        res.send({
            items: docs
        })
    })

}

/* MODIFICAR DATOS*/

exports.deleteSingle = (req, res) => {
    const id = req.params.id
    model.deleteOne(
        { _id: parseId(req.params.id)},
        

    (err, docs) =>{
        res.send({
            items: docs
        })
    })

}

/* OBTENER DATOS */

exports.getSingle = (req, res) => {
    const id = req.params.id
    const body = req.body
    model.findOne(
        { _id: parseId(req.params.id)},
        body,

    (err, docs) =>{
        res.send({
            items: docs
        })
    })
}