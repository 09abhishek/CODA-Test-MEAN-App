const express = require('express');
const router = express.Router();
const Movie = require('../models/movies')

router.post('/', function (req, res) {
  let movieID = req.body.movie_id;
  let responseObject = [];

  const where = {
    movie_id : movieID
  }
  let updateData = {
    "movie_name": req.body.movie_name,
    "movie_title": req.body.movie_title,
    "avg_ratings": req.body.avg_ratings,
    "rating": req.body.rating,
    "movie_description": req.body.movie_description,
    "language": req.body.Language,
    "cast_crew": req.body.cast_crew,
    "genre": req.body.genre,
    "release_date": req.body.release_date
  }
  Movie.update(updateData, { where: [where] }).then(result => {
    if(result == 1) {
      responseObject = ['updated Successfully'];
    } else {
      responseObject = ['Error occurred, Something went wrong!'];
    }
    res.json({
      result: responseObject
    });
  }).catch(e => console.log(e));

});

module.exports = router;
