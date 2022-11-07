export  {}
const express2: any = require('express')
const router: any = express2.Router()

const ImageUpload = require('../models/image')
const db = require('../config/database')

router.get('/', async (req: any, res: any) => {
 const data = await ImageUpload.findAll()
 res.send(data)
  
})

router.post('/add', async (req: any, res: any) => {
    const { name, size, date } = req.body

 const data: any = await ImageUpload.create({
    name, 
    size,
    date
   })
    
   res.send(data)
})

router.delete('/delete/:id', async (req: any, res: any) => {
     const data = await ImageUpload.destroy( {
      where: {
         id: req.params.id
      },
      force: true
     })

    res.send('success')
})

module.exports = router