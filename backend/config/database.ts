const Sequelize2 = require('sequelize')

module.exports = new Sequelize2('fileupload', 'root', 'root123', {
    host: 'localhost',
    dialect:  'mysql'
  });


  
