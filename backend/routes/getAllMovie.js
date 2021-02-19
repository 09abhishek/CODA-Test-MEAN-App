const express = require('express');
const router = express.Router();
const Movie = require('../models/movies')

router.get('/', function (req, res) {
  Movie.findAll().then(result => {
    let responseObject = [];
    for (let i = 0; i < result.length; i++) {
      responseObject.push(result[i].dataValues);
    }
    res.status(200).send({
      status:true,
      result: responseObject
    });
  }).catch(e => console.log(e));
});

module.exports = router;
