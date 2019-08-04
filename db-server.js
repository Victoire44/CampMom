var express = require("express");
var fileUpload = require("express-fileupload");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(fileUpload());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var db = require("./db/models")

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });