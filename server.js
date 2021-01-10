const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');

const db = require('./backend/database');

const login = require('./backend/routes/login');

const getAllMovie = require('./backend/routes/getAllMovie');
const getMovieDetailsByID = require('./backend/routes/getMovieDetailsByID');
const editMovieByID = require('./backend/routes/editMovieByID');
const getStarRatingsOfMovie = require('./backend/routes/getStarRatingsOfMovie');

const addMovie = require('./backend/routes/addMovie');
const searchMovie = require('./backend/routes/searchMovie');
const deleteMovieByID = require('./backend/routes/deleteMovieByID');

const deleteCommentByID = require('./backend/routes/deleteCommentByID');
const getCommentsByMovie = require('./backend/routes/getCommentsByMovie');
const addCommentsToMovie = require('./backend/routes/addCommentsToMovie');


var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


db.authenticate().then(res => console.log('Connected to DB!!')).catch(err => console.log('error', err));

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if(authHeader) {
    const token = authHeader.split(' ')[1];
    if (token == null) return res.status(401).send({
      status:false,
      response: "Action not permitted! Unauthorized Access!"
    });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(401).send({
        status:false,
        response: "Action not permitted! Unauthorized Access!"
      });
      req.user = user;
      next();
    });
  } else {
    res.status(401).send({
      status:false,
      response: "Access Token Missing!"
    });
  }

}

function adminRoleAuthorization(req, res, next) {
  const authHeader = req.headers['authorization'];
  const accessToken = authHeader.split(' ')[1];
  const decodedJwt = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
  if (decodedJwt.user_role === 'administrator') {
    next();
  } else {
    res.status(401).send({
      status:false,
      response: "Action not permitted! Unauthorized User!"
    });
  }
}

app.use('/login', login);

app.use('/getAllMovie', authenticateToken, getAllMovie);
app.use('/getStarRatingsOfMovie', authenticateToken, getStarRatingsOfMovie);

app.use('/addMovie', authenticateToken, adminRoleAuthorization, addMovie);
app.use('/searchMovie', authenticateToken, searchMovie);
app.use('/getMovieDetailsByID', authenticateToken, getMovieDetailsByID);
app.use('/editMovieByID', authenticateToken, adminRoleAuthorization, editMovieByID);
app.use('/deleteMovieByID', authenticateToken, adminRoleAuthorization, deleteMovieByID);

app.use('/deleteCommentByID', authenticateToken, adminRoleAuthorization, deleteCommentByID);
app.use('/getCommentsByMovie', authenticateToken, getCommentsByMovie);
app.use('/addCommentsToMovie', authenticateToken, addCommentsToMovie);

app.get('/', function (req, res) {
  res.send('login First!');
})

var server = app.listen(8081, "192.168.0.125", function () {
  let host = server.address().address
  let port = server.address().port

  console.log("app listening at http://%s:%s", host, port)
})
