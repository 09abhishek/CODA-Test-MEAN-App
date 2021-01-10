const express = require('express');
const router = express.Router();
const Comment = require('../models/comment')

router.post('/', function (req, res) {
  const commentID = req.body.comment_id;
  let responseObject = [];
  Comment.destroy({where: {comment_id: commentID}}).then(result => {
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
