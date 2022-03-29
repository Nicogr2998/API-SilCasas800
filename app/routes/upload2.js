const exress = require('express')

const controller = require('../controllers/upload2')

const router = exress.Router()

const path = 'upload'

const pathCompleta = '/' + path

const pathCompletaId = '/' + path + '/:id' 

router.post(
pathCompleta,
controller.upload,
controller.uploadFile
)


module.exports = router