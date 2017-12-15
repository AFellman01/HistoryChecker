var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 8080;
//var router = express.Router();
// Sets up the Express app to handle data parsing

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tiger1932",
  database: "history"
});

var routes = require("./controllers/historyControllers.js");

app.use("/", routes);


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


app.listen(port);
