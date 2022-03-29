const exress = require('express')

const controller = require('../controllers/items')

const router = exress.Router()

const path = 'items'

const pathCompleta = '/' + path
/*Ruta /user GET */
router.get(
    pathCompleta,
    controller.getData
)

module.exports = router