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
//*********************Search All the Post**************************
router.post("/search", function(req, res) {
	    console.log(req.body);
	    console.log("Search Woked");
	    history.Blog.findAll().then(function(dbblog){
	    	console.log(dbblog)
	    	var truths = {answers: dbblog}
	    	return res.render('facts-block', truths)
	    })
 });
//********************Login Page***********************************
router.get("/login", function(req, res){
  res.render("partials/login")
});
//********************CREATE THE POST*******************************
router.post("/post", function(req, res){
	history.Blog.create({
		Author: req.body.Author,
		Post: req.body.Post
	}).then(function(dbPost){console.log(dbPost)})

 	//Create new Credo in table Credential

 	history.Credential.create({
 		Credo: req.body.Credo
 	}).then(function(dbCredo){console.log(dbCredo)})
 	res.render("partials/posts")
});

//**********************Get the answer from Database****************
router.get("/answers", function(req, res) {
  res.render("partials/answers")
});

//**********************Get Credential from Database****************
router.get("/about", function(req, res) {
	history.Credential.findOne({
		where: {id: req.params.id, Author: req.body.Author}
	}).then(function(dbCredential){
		console.log(dbCredential);
		res.render("partials/about")
	})

});

//****************Search All post Admin Page*****************
router.get("/admin", function(req, res) {
	history.Credential.findAll().then(function(AllPost){
		var truths = {post: AllPost}
		return res.render("all Post", truths)
	})
	res.render("partials/admin")
})

//*********************update Visible***********************

router.put("/admin", function(req, res){
	db.Blog.update(req.Visible, 
	{
		where: {
			id: req.body.id,
			defaultValue: true
		}
	}).then(function(dbUpdate){
		return res.render("/admin")
	})
})

router.get("/blog", function( req, res){
  res.render("partials/blog");
});

// Export routes for server.js to use.
module.exports = router;
