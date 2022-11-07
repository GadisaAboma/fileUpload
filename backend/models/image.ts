export {}

const { Sequelize } = require('sequelize')

const db = require('../config/database')

const ImageModel: any = db.define('files',{
   name: {
    type: Sequelize.STRING
   },
   size: {
    type: Sequelize.STRING
   },
   date: {
    type: Sequelize.STRING
   },
}, {
    timestamps: false
  })

module.exports = ImageModel