const { redirect } = require('express/lib/response');
const { default: mongoose } = require('mongoose');
const model = require('../models/cliente')
const multer = require('multer');
const multerConfig = require('../controllers/upload2');
const Cliente = require('../models/cliente');


const upload = multer(multerConfig).single('path');

//carga imagenes
exports.fileUpload = (req, res, next) => {
    upload(req, res, function(error) {

        if(error){
            res.json({message: error});

        }
        return next()
    });
};


//pasar id a objeto mongoose
const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}
//opciones de paginacion
const option = {
    page: 1,
    limit: 60
}


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
exports.insertData = (req, res, next) => {
    let cliente = new Cliente({
        nombre: req.body.nombre,
        archivos: req.body.archivos,
        correo:req.body.correo,
        telefono:req.body.telefono,
        direccion: req.body.direccion,
        documento:req.body.documento,
        vinculo:req.body.vinculo,
        notas:req.body.notas,
        tipo:req.body.tipo
    })
    if(req.files){
        let path = ''
        req.files.forEach(function(files,index, arr) {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        cliente.archivos = path
    }
    res.send({cliente})
    cliente.save();
    console.log("salta por aca" +cliente)
   /* const data = req.body

    console.log("esto es dara ",  req.body)
    model.create(data, (err,docs) =>{
        if(err){
            res.send({error:'error '}, 422)
        }else{
                data.archivos = req.file.path;
                res.send({data: docs})

            
        }
        //console.log("esto es dara ", data)
    } )
   // res.send({ data })
*/
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
    const {id} = req.params.id
    model.deleteOne({ _id: parseId(req.params.id)},
    (err, docs) =>{
        res.send({
            items: docs
        })
    })

}

/* OBTENER DATOS */

exports.getSingle = (req, res) => {
    model.findOne({ _id: parseId(req.params.id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}