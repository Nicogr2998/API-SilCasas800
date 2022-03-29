const multer = require('multer');
const shortid = require('shortid');

/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        //cb(null, file.fieldname + '-' + Date.now())
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage})

exports.upload = upload.single('avatar')

exports.uploadFile = (req, res) => {
    console.log("hola")
    res.send({ data : 'Enviar un archivo'})
}
*/

const multerConfig = {
  storage: fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname+'../../uploads/'); // los uploads se subirán en esta carpeta
    },
    filename: (req, file, cb) => {
      // obtener la extensión del archivo
      const extension = file.mimetype.split('/')[1];
      // generar ID para ponerlo como nombre de imagen
      cb(null, `${shortid.generate()}.${extension}`);
    }
  }),
  fileFilter(req, file, cb) {
    if ( file.mimetype === 'image/jpeg' ||  file.mimetype ==='image/png' ) { // solo aceptar imágenes
      cb(null, true);
    } else {
      cb(new Error('Formato de imagen no válido'))
    }
  },
}


//const multer = require('multer')
