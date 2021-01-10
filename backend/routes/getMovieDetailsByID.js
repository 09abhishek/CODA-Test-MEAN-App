const express = require('express');
const router = express.Router();
const Movie = require('../models/movies')

router.get('/:id', function (req, res) {
  let movieID = req.params.id;
  let responseObject = [];
  Movie.findOne({where : { movie_id : movieID}}).then(result => {
    if(result) {
      responseObject = [result];
    } else {
      responseObject = [];
    }
    res.status(200).send({
      status:true,
      result: responseObject
    });
  }).catch(e => console.log(e));

});




module.exports = router;
