'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/db_config.json')[env];
const db        = {};

let connection;
if (config.use_env_variable) {
  connection = new Sequelize(process.env[config.use_env_variable]);
} else {
  connection = new Sequelize(config.database, config.username, config.password, config);
}

db.connection = connection;
db.Sequelize = Sequelize;

module.exports = db;
