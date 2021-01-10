const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', function (req, res) {
  let searchParam = (req.query.search).toLowerCase();

  if (searchParam.length > 0) {
    Movie.findAll({
      where: {movie_name: {[Op.like]: '%' + searchParam + '%'}}
    }).then((result) => {
      if (res) {
        let responseObject = [];
        for (let i = 0; i < result.length; i++) {
          console.log(result[i].dataValues);
          responseObject.push(result[i].dataValues);
        }
        res.status(200).send({
          status: true,
          result: responseObject
        });
      } else {
        responseObject = [];
        res.status(200).send({
          status: true,
          result: responseObject
        });
      }
    }).catch(e => console.log(e));
  } else {
    res.status(200).send({
      status: true,
      result: []
    });
  }
});

module.exports = router;
