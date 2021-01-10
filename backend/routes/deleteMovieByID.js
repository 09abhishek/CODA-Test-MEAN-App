const express = require('express');
const router = express.Router();
const Movie = require('../models/movies')

router.post('/', function (req, res) {
  const movieID = req.body.movie_id;
  let responseObject = [];
  Movie.destroy({where: {movie_id: movieID}}).then(result => {
    console.log(result,'result');
    if(result) {
      responseObject = ['Record Deleted Successfully!'];
    } else {
      responseObject = ['Error occurred, Something went wrong!'];
    }
    res.status(200).send({
      status:true,
      result: responseObject
    });
  }).catch(e => console.log(e));

});


module.exports = router;
