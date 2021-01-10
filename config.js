const dotenv = require('dotenv').config();
const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env


module.exports = {
  ACCESS_TOKEN_SECRET : ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET : REFRESH_TOKEN_SECRET
}
