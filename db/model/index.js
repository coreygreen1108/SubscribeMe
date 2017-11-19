const db = require('../_db').sequelize;

const User = require('./User');

module.exports = {
    db,
    User
}