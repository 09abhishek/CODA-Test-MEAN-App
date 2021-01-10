const express = require('express');
const router = express.Router();
const Comment = require('../models/comment')



router.post('/', function (req, res)  {
 const movieID = req.body.movie_id;
  let responseObject = [];
   Comment.findAll({where: {movie_id: movieID}}).then(result => {
     for (let i = 0; i < result.length; i++) {
       console.log(result[i].dataValues);
       responseObject.push(result[i].dataValues);
     }
     res.status(200).send({
       status:true,
       result: responseObject
     });
  }).catch(e => console.log(e));


});


module.exports = router;
