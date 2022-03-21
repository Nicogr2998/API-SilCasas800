const { redirect } = require('express/lib/response');
const { default: mongoose } = require('mongoose');
const model = require('../models/ventas')
const multer = require('multer');
const multerConfig = require('../controllers/upload2');
const Ventas = require('../models/ventas');


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
    let venta = new Ventas({
        titulo: req.body.titulo,
        avatar: req.body.avatar,
        descripcion:req.body.descripcion,
        tamanio:req.body.tamanio,
        banios: req.body.banios,
        precio:req.body.precio,
        tipo:req.body.tipo,
        ubicacion:req.body.ubicacion,
        calefaccion:req.body.calefaccion,
        aire:req.body.aire,
        terraza:req.body.terraza,
        amueblado:req.body.amueblado,
        coEquip:req.body.coEquip,
        mascotas:req.body.mascotas,
        ascensor:req.body.ascensor,
        planta:req.body.planta,
        garage:req.body.garage,
        cuartos:req.body.cuartos
    })
    if(req.files){
        let path = ''
        req.files.forEach(function(files,index, arr) {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        venta.avatar = path
    }
    res.send({venta})
    venta.save();
    console.log("salta por aca")
   /* const data = req.body

    console.log("esto es dara ",  req.body)
    model.create(data, (err,docs) =>{
        if(err){
            res.send({error:'error '}, 422)
        }else{
                data.avatar = req.file.path;
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
    model.findOne({ _id: parseId(req.params.id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}