const path = require('path');
const multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,'uploads/')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, file.originalname + ext )
    }

})
var upload = multer({
    storage: storage,
    
    fileFilter: function(req, file, callback){
        
        if(file.mimetype == "image/png"||
        file.mimetype == "image/jpg"|
        file.mimetype == "image/jpeg"
        ){
            callback(null,true)
        }else{
            console.log("solo admite png y jpg o jpeg")
            callback(null,false)
        }
    }
    
})

module.exports = upload