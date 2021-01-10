const Sequelize = require('sequelize');

const sequelize = new Sequelize('moviesDB', 'root', 'rootpasswordgiven',
  {
    dialect: 'mysql', host: 'localhost', pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000
    },
    define: {
      timestamps: false
    }
  },
);


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
