var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var history = require("../models/blog.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
//   cat.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
    res.render("index");
//   });
});

router.get("/login", function(req, res){
  res.render("partials/login")
});


// Export routes for server.js to use.
module.exports = router;
