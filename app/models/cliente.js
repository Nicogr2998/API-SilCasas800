const mongoosePaginate = require('mongoose-paginate-v2')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ClienteScheme = new Schema(
    {
        nombre: {
            type:  String
        },
        archivos: {
            type: String,
            default: 'http://image.com'
        },
        correo: {
            type: String
        },
        telefono: {
            type: Number
        },
        direccion: {
            type: String
        },
        documento:{
            type: Number
        },
        vinculo:{
            type: String
        },
        notas:{
            type: String
        },
        tipo:{
            type: String
        }
    },{
        timestamps:true
    }
)
ClienteScheme.plugin(mongoosePaginate)

const Cliente = mongoose.model('Cliente', ClienteScheme)
module.exports = Cliente