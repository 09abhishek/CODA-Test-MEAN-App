const express = require('express');
const router = express.Router();
const Comment = require('../models/comment')


router.post('/', function (req, res) {
  let uploadComment = {
    user_id: req.body.user_id,
    star_rating: req.body.star_rating,
    description: req.body.description,
    movie_id: req.body.movie_id,
    liked_count: req.body.liked_count,
    disliked_count: req.body.disliked_count,
    user_name: req.body.user_name
  }


  let responseObject = [];
  Comment.create(uploadComment).then(result => {
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
