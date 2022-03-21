const exress = require('express')

const controller = require('../controllers/user')

const router = exress.Router()

const path = 'user'

const pathCompleta = '/' + path

const pathCompletaId = '/' + path + '/:id' 

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