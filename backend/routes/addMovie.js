const express = require('express');
const router = express.Router();
const Movie = require('../models/movies')

router.post('/', function (req, res) {

  let uploadMovie = {
    "movie_name": req.body.movie_name,
    "movie_title": req.body.movie_title,
    "avg_ratings": req.body.avg_ratings,
    "rating": req.body.rating,
    "movie_description": req.body.movie_description,
    "language": req.body.language,
    "cast_crew": req.body.cast_crew,
    "genre": req.body.genre,
    "release_date": req.body.release_date,
    "image_url":req.body.image_url
  }
  let responseObject = [];
  Movie.create(uploadMovie).then(result => {
      if (result) {
        res.status(200).send({
          status: true,
          result: 'Record Added Successfully!'
        });
      } else {
        responseObject = ['Error occurred, Something went wrong!'];
      }
      res.json({
        result: responseObject
      });
  }).catch(e => console.log(e));

});

module.exports = router;
