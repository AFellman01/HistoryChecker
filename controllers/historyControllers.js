var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var history = require("../models/");

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

router.post("/search", function(req, res) {
	    console.log(req.body);
	    history.Blog.findAll().then(function(dbblog){
	    	console.log(dbblog)
	    	return res.render('index')
	    })
 });
router.get("/login", function(req, res){
  res.render("partials/login")
});

router.get("/post", function(req, res){
  res.render("partials/posts")
});

router.get("/answers", function(req, res) {
  res.render("partials/answers")
});

router.get("/about", function(req, res) {
  res.render("partials/post")
})

// Export routes for server.js to use.
module.exports = router;
