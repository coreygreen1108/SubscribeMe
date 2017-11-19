const Sequelize = require('sequelize'); 
const db = require('../_db').sequelize;
const request = require('request-promise');
const keysConfig = require('../../config/keys.json')[process.env.NODE_ENV || 'development'];
const crypto = require('crypto');

const Company = db.define('company', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING
    },
    salt: {
      type: Sequelize.STRING
    }
  })
  
  module.exports = Company;
  
  /**
   * instanceMethods
   */
  Company.prototype.validatePassword = function (candidatePwd) {
    return Company.encryptPassword(candidatePwd, this.salt) === this.password
  }
  
  /**
   * classMethods
   */
  Company.generateSalt = function () {
    return crypto.randomBytes(16).toString('base64')
  }
  
  Company.encryptPassword = function (plainText, salt) {
    return crypto.createHash('RSA-SHA256').update(plainText).update(salt).digest('hex')
  }
  
  const setSaltAndPassword = company => {
    if (company.changed('password')) {
      company.salt = Company.generateSalt()
      company.password = Company.encryptPassword(company.password, company.salt)
    }
  }

  const setGPSCoordinates = company => {
      if(company.changed('address') || company.changed('city') || company.changed('state')){
        return request(`https://maps.googleapis.com/maps/api/geocode/json?address=${company.address.replace(/ /g, '+')},+${company.city.replace(/ /g, '+')},+${company.state.replace(/ /g, '+')}&key=${keysConfig.geocoding}`)
        .then(location => {
            let loc = JSON.parse(location).results[0].geometry.location;
            company.location = [loc.lat, loc.lng];
        })
    }
  }
  
  Company.beforeCreate(setSaltAndPassword)
  Company.beforeUpdate(setSaltAndPassword)

  Company.beforeCreate(setGPSCoordinates)
  Company.beforeUpdate(setGPSCoordinates)