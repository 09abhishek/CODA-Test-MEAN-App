const express = require('express');
const router = express.Router();
const User = require('../models/users');
const jwt = require('jsonwebtoken')

router.post('/', function (req, res) {
  const username = req.body.username;
  const pwd = req.body.password;
  const user = {name: username};

  User.findOne({where: {user_name: username, user_pwd: pwd}}).then(result => {
    if (result) {
      user.user_role = result.user_role;
      delete result.dataValues.user_pwd;
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {algorithm: 'HS256'});

      res.status(200).send({
        status:true,
        result: result,
        accessToken: accessToken
      });
    } else {
      res.status(200).send({
        status:false,
        result: "User not found or Invalid Credentials!"
      });
    }

  }).catch((e) => {
    console.log(e);
  })

});


module.exports = router;
