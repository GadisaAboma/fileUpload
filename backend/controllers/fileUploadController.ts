export {}

const ImageUpload = require('../models/image')

const getFiles: any = async (req: any, res: any) => {
  const data = await ImageUpload.findAll()
  res.send(data)
}

const addFile: any = async (req: any, res: any) => {
  const { name, size, date } = req.body

  const data: any = await ImageUpload.create({
    name,
    size,
    date,
  })

  res.send(data)
}

const deleteFile: any = async (req: any, res: any) => {
  const data = await ImageUpload.destroy({
    where: {
      id: req.params.id,
    },
    force: true,
  })

  res.send('success')
}

module.exports = {
  getFiles,
  deleteFile,
  addFile,
}
