const exress = require('express')

const controller = require('../controllers/ventas')

const router = exress.Router()

const path = 'ventas'

const pathCompleta = '/' + path

const pathCompletaId = '/' + path + '/:id' 

const avatarA = "avatar[]"

const avatar = "avatar"

const upload = require('../utils/upload')

const express = require('express')

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const multer = require('multer')
//const upload = multer({ dest: 'uploads/' })

const { uploadFile, getFileStream } = require('../utils/s3')

const app = express()

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
    controller.insertData,
     /*upload.array('avatar[]'), async (req, res) => {
        const file = req.files
        //req.file.filename = req.file.originalname
        console.log(JSON.stringify(file))
      
        // apply filter
        // resize 
        for (const iterator of file) {
            iterator.filename = iterator.originalname
            const result = await uploadFile(iterator)
            await unlinkFile(iterator.path)
            console.log(result)
            const description = req.body.description
        }
        res.send({imagePath: `Pronto el pollo!`})
      }*/
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