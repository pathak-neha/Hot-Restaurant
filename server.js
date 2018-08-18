var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var orders = [];

var waitlist = [];



app.get("/", function(req, res) {
  return res.json(orders)
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "/tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "/reservation.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(orders);
});

app.get("/api/reserve", function(req, res) {
  return res.json(waitlist)
});

app.post("/api/tables", function(req, res) {
  var newOrder = req.body;

  if (orders.length <= 2) {
    orders.push(newOrder)
  } else {
    waitlist.push(newOrder)
  }
  console.log(newOrder);
  res.json(newOrder);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
