const Sequelize = require('sequelize')
const dbconfig = require('./dbconfig')

const connection = new Sequelize(dbconfig);

module.exports = connection;