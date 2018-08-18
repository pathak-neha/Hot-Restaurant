var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
var reservations = [];
var waitList = [];

app.get("/api/tables", function (req, res) {
    return res.json(reservations)
});
=======
var orders = [];

var waitlist = [];

>>>>>>> c7a7fc5869d76149bf1421145d646dffdaafc5cb

app.get("/api/reservations", function (req, res) {
    return res.json(reservations)
});

<<<<<<< HEAD

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList)
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "resevation.html"));
  });


app.post("/reserve", function(req, res) {
    var newReservation = req.body;
  
    console.log(newReservation);
  
    characters.push(newReservation);
  });
  
  
=======
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
>>>>>>> c7a7fc5869d76149bf1421145d646dffdaafc5cb

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
