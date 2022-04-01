const exress = require('express')

const controller = require('../controllers/cliente')

const router = exress.Router()

const path = 'cliente'

const pathCompleta = '/' + path

const pathCompletaId = '/' + path + '/:id' 

const avatarA = "archivos[]"

const avatar = "archivos"

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