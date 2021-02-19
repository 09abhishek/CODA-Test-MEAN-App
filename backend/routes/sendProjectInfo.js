const path = require('path');

const express = require('express');
const router = express.Router();
const rootDirPath = require('../utils/path')

router.get('/', function (req, res) {
  console.log('asdas');
  res.sendFile(path.join(__dirname, '../', 'views', 'info.html'))
  // res.sendFile(path.join(rootDirPath, '../', 'views', 'info.html'))

});

module.exports = router;
