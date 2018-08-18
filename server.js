var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [];
var waitList = [];

app.get("/api/tables", function (req, res) {
    return res.json(reservations)
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations)
});


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
  
  

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

