export  {}
const express2: any = require('express')
const router: any = express2.Router()

const { addFile, deleteFile, getFiles } = require('../controllers/fileUploadController')



router.get('/', getFiles)

router.post('/add', addFile)

router.delete('/delete/:id', deleteFile)

module.exports = router