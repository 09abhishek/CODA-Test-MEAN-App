const express = require('express');
const router = express.Router();
const Comments = require('../models/comment')

router.post('/', function (req, res) {
  let movieID = req.body.movie_id;
  let responseObject = [];
  let avgStarRating = 0;

  Comments.findAll({where: {movie_id: movieID}}).then(result => {
    let sumOfRatings = 0;
    if (result !== null) {
      for (let i = 0; i < result.length; i++) {
        sumOfRatings = sumOfRatings + +result[i].dataValues.star_rating;
        responseObject.push(result[i].dataValues.star_rating);
      }
      avgStarRating = +parseFloat(sumOfRatings / responseObject.length).toFixed(1);

      res.status(200).send({
        status: true,
        result: avgStarRating
      });
    } else {
      res.status(200).send({
        status: false,
        result: 0

      });
    }

  }).catch(e => {
    res.status(200).send({
      status: false,
      result: 'Ratings not available!'
    });
  });

});


module.exports = router;
