const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://nicolas:nicolas@cluster0.8mgsy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'



module.exports = ( ) => {

    const connect = () =>{

    mongoose.connect(
        DB_URI,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if(err){
                console.log('DB: ERROR!!')
            }else{
                console.log('Conexion correcta!!')
            }
        }
    )
}

    connect();
}