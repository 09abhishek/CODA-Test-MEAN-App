var express = require('express');
var bodyParser = require('body-parser');
var app = express();




app.get('/login', function (req, res) {
  console.log("Got a GET request for the homepage");
  res.send('login');
})


app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
})

app.delete('/del_moive', function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send('Hello DELETE');
})

app.get('/list_movies', function (req, res) {
  console.log("Got a GET request for /list_movies");
  res.send('Page Listing');
})

app.get('/ab*cd', function(req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
})

var server = app.listen(8081, "127.0.0.1",function () {
  var host = server.address().address
  var port = server.address().port

  console.log("app listening at http://%s:%s", host, port)
})
