const db = require('../_db').sequelize;

const User = require('./User');
const Company = require('./Company');

module.exports = {
    db,
    User,
    Company
}