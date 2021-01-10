const Sequelize = require('sequelize');

const sequelize = require('../database');


const Movie = sequelize.define('movie', {
  movie_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull : false,
    primaryKey: true
  },
    movie_name: {
      type: Sequelize.STRING,
      allowNull : false
    },
    movie_title: {
      type: Sequelize.STRING,
      allowNull : false
    },
    avg_ratings: {
      type: Sequelize.INTEGER,
      allowNull : false
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull : false
    },
    movie_description: {
      type: Sequelize.STRING
    },
    language: {
      type: Sequelize.STRING
    },
    cast_crew: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.STRING
    },
    release_date: {
      type: Sequelize.STRING
    },
    image_url: {
      type: Sequelize.STRING
    }
});

module.exports = Movie;
