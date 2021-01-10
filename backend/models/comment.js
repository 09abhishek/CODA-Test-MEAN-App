const Sequelize = require('sequelize');

const sequelize = require('../database');

const Comment = sequelize.define('comment', {
  comment_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull : false,
    primaryKey: true
  }, user_id: {
    type: Sequelize.STRING,
    allowNull : false,
    primaryKey: true
  },
  star_rating: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  description: {
    type: Sequelize.STRING,
    allowNull : false
  },
  movie_id: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  liked_count: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  disliked_count: {
    type: Sequelize.STRING
  },
  user_name: {
    type: Sequelize.STRING
  }
});

module.exports = Comment;
