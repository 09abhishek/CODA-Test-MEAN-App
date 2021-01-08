const Sequelize = require('sequelize');

const sequelize = new Sequelize('moviesDB', 'root', 'rootpasswordgiven',
  {dialect: 'mysql', host : 'localhost'});

module.exports = sequelize;


// const mysql = require('mysql2');
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'moviesDB',
//   password: 'rootpasswordgiven'
// })
//
// module.exports = pool.promise();
