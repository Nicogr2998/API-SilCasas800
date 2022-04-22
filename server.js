const exress = require('express')
/*Inicializacion de la base de datos*/ 
const initdb = require('./app/config/db')
const app = exress()
const bodyParser = require('body-parser')

const express = require('express');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const port =  process.env.PORT || 3001

const userRouter = require('./app/routes/user')
const itemsRouter = require('./app/routes/items')
//const uploadRouter = require('./app/routes/upload2')
const ventasRouter = require('./app/routes/ventas')
const clienteRouter = require('./app/routes/cliente')
const upload = require("./app/utils/upload")
const cors = require('cors')
//const { use } = require('express/lib/application')

app.use(cors())
app.use(userRouter)
app.use(itemsRouter)
//app.use(uploadRouter)
app.use(ventasRouter)
app.use(clienteRouter)

app.use('/uploads', express.static('uploads'))

app.use(
    bodyParser.json({
        limit:'20mb'
    })
)
app.use(
    bodyParser.urlencoded({
        limit:'20mb',
        extended:true
    })
)

app.listen(port, () => {
    console.log('La aplicacion esta en linea!!! ')
})

initdb()
