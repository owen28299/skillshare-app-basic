var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var database = require('./public/database.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post("/postevent", function(req,res){
  database.events.push(req.body);
  res.json("{success: true}");
});

app.get("/getskills", function(req,res){
  res.send(database.events);
});

var server = app.listen(8001, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server listening at http://%s:%s", host, port);
});