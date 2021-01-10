const Sequelize = require('sequelize');

const sequelize = require('../database');

const User = sequelize.define('user', {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull : false,
    primaryKey: true,
    unique: true
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull : false
  },
  name: {
    type: Sequelize.STRING,
    allowNull : false
  },
  user_pwd: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  email: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  user_role: {
    type: Sequelize.STRING,
    allowNull : false
  },
  age: {
    type: Sequelize.INTEGER
  },
  sex: {
    type: Sequelize.STRING
  },
  phone_number: {
    type: Sequelize.INTEGER
  }
});

module.exports = User;
