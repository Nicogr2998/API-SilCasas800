const mongoosePaginate = require('mongoose-paginate-v2')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VentasScheme = new Schema(
    {
        titulo: {
            type:  String
        },
        avatar: {
            type: String,
            default: 'http://image.com'
        },
        descripcion: {
            type: String
        },
        tamanio: {
            type: Number
        },
        banios: {
            type: Number
        },
        ambientes: {
            type: Number,
            default: 10
        },
        precio:{
            type: Number
        },
        tipo:{
            type: Number
        },
        ubicacion:{
            type: String
        },
        calefaccion:{
            type: String
        },
        aire:{
            type: String
        },
        terraza:{
            type: String
        },
        amueblado:{
            type: String
        },
        coEquip:{
            type: String
        },
        mascotas:{
            type: String
        },
        ascensor:{
            type: String
        },
        planta:{
            type: String
        },
        garage:{
            type: Number
        }
        ,cuartos:{
            type: Number
        }

    },{
        timestamps:true
    }
)
VentasScheme.plugin(mongoosePaginate)

const Ventas = mongoose.model('Ventas', VentasScheme)
module.exports = Ventas