var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [];

app.get("/", function (req, res) {
    return res.json(reservations)
});


app.get("/api/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "#"));
});

// app.get("/api/characters/:character", function (req, res) {
//     var chosen = req.params.character;

//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//         if (chosen === characters[i].routeName) {
//             return res.json(characters[i]);
//         }
//     }

//     return res.json(false);
// });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

