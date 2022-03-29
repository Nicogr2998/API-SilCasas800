const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const UserScheme = new mongoose.Schema(
    {
        name: {
            type:   String
        },
        avatar: {
            type: String,
            default: 'http://image.com'
        },
        email: {
            type: String,
            unique: true,
            required: true
        }
    },{
        versionKey:false,
        //GRADA FECHA DE CREACION Y MODIFICACION
        timestamps:true
    }
)
UserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('user', UserScheme)