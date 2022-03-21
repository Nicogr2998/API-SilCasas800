const exress = require('express')

const controller = require('../controllers/ventas')

const router = exress.Router()

const path = 'ventas'

const pathCompleta = '/' + path

const pathCompletaId = '/' + path + '/:id' 

const avatarA = "avatar[]"

const avatar = "avatar"

const upload = require('../utils/upload')

/*Ruta /user GET */
router.get(
    pathCompleta,
    controller.getData
)

/**
 * Ruta: /user POST
 */
 router.post(
    pathCompleta,
    upload.array(avatarA),
    controller.insertData
)

/*Ruta /user GET */
router.get(
    pathCompletaId,
    controller.getSingle
)

/**
 * Ruta: /user POST
 */
 router.put(
    pathCompletaId,
    controller.updateSingle
)

/**
 * Ruta: /user POST
 */
 router.delete(
    pathCompletaId,
    controller.deleteSingle
)

module.exports = router