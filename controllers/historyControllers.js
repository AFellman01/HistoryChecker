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
	console.log(req.body.keyword)
	var question = req.body.keyword;
	    console.log("Search Worked");
	    history.blogs.find({
	    	where: { title:question },
	    }).then(function(dbblog){
	    	console.log(dbblog, 'right here @@@@')
	    	var truths = {answers: dbblog}
	    	console.log(truths);
	    	res.render('partials/factbook', truths)
	    })
 });
//********************Login Page***********************************
router.get("/login", function(req, res){
  res.render("partials/login")
});
//********************CREATE THE POST*******************************
router.post("/post", function(req, res){
	history.blog.create({
		Author: req.body.Author,
		Post: req.body.Post
	}).then(function(dbPost){
		console.log(dbPost)
		res.render("partials/posts")
	})

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


//****************Search All post Admin Page*****************
router.get("/admin", function(req, res) {
	history.Credential.findAll().then(function(AllPost){
		var truths = {post: AllPost}
		return res.render("all Post", truths)
	})
	res.render("partials/admin")
});





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

router.get("/about", function(req, res) {
	res.render("partials/about")
});

// Export routes for server.js to use.
module.exports = router;
