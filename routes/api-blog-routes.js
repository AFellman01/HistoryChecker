var db = require("../models");
module.exports = function (app){
//*********************Create the post*******************************
	app.post("api/blog", function (req, res){
		db.Blog.create(req.Post).then(function(dbPost){
			res.json(dbPost);
		});
	});
//*********************DETLET THE POST*******************************
	app.delete("api/blog", function (req,res){
		db.Blog.destroy({
			where:{id: req.params.id}
		}).then(function(dbPost){
			res.json(dbPost);
		});
	});

//*********************UPDATE THE POST*******************************
	app.put("api/blog/:id", function(req, res){
		db.Blog.update(
			req.Post,
			{
				where: {
					id: req.body.Post
				}
			});
	});


};