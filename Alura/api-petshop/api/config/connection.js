const Sequelize = require("sequelize");
const Providers = require("../models/Providers");
const dbconfig = require("./dbconfig");

const connection = new Sequelize(dbconfig);
Providers.init(connection);
module.exports = connection;
