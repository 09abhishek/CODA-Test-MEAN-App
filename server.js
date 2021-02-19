const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');

// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//   res.append('Access-Control-Allow-Credentials', true);
//   next();
// });



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

const sendProjectInfo = require('./backend/routes/sendProjectInfo');


var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

// for serving static files like css.
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

app.use('/appInfo', sendProjectInfo)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '/backend','views', '404.html'));
  // res.status(404).send('Invalid Route');
});

// use try catch block in every DB operation

app.get('/', function (req, res) {
  res.send('login First!');
})

// home "192.168.8.91"||
// office : 192.168.0.127

let server = app.listen(8081,   "192.168.8.91", function () {
  let host = server.address().address
  let port = server.address().port

  console.log("app listening at http://%s:%s", host, port)
})
const io = socket.listen(server);

io.sockets.on('connection', (socket) => {

  console.log('websocket connected');

 socket.emit('some event', 'LOOOOOL L:O')

  socket.on('send_data', (socket) => {
    console.log(socket);

 })

});
