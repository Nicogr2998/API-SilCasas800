const mongoosePaginate = require('mongoose-paginate-v2')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ClienteScheme = new Schema(
    {
        nombre: {
            type:  String,
            default: 'no definido'
        },
        archivos: {
            type: String,
            default: 'http://image.com'
        },
        correo: {
            type: String,
            default: 'no definido'
        },
        telefono: {
            type: Number,
            default: 0
        },
        direccion: {
            type: String,
            default: 'no definido'
        },
        documento:{
            type: Number,
            default: 0
        },
        vinculo:{
            type: String,
            default: 'no definido'
        },
        notas:{
            type: String,
            default: 'no definido'
        },
        tipo:{
            type: Number,
            default: 0
        }
    },{
        timestamps:true
    }
)
ClienteScheme.plugin(mongoosePaginate)

const Cliente = mongoose.model('Cliente', ClienteScheme)
module.exports = Cliente