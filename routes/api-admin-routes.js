var db = require("../models")
module.exports = function(app) {
	app.post("/api/Admin", function(req, res){
		console.log(req)
		db.Admin.create(req.param.id, req.email, req.password, req.name, req.DateOfBirth)
		.then(function(dbAdmin){
			res.json(dbAdmin)
		});
	});
//***********************DELETE ADMIN********************************
	app.post("/api/Admin/:id",function(req, res){
		db.Admin.destroy({
			where: {
				id: req.param,id
			}
		}).then(function(dbAdmin){
			res.json(dbAdmin);
		})
	})
//***********************Find all post from User*********************
	app.get ("/api/Admin", function(req, res){
		var query = {};
		if (req.query.id) {
			query.id = req.query.id;
		}
		db.Blog.findAll({
			where: query.
			include: [db.Author]
		}).then(function(dbPost){
			res.json(dbPost)
			console.log(dbPost)
		})
	});
//***********************Delete Post from User*********************
	app.delete ("api/Admin/:id", function(req, res){
		db.Blog.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbPost) {
			res.json(dbPost)
		});
	});

//**********************UPDATE Status of visible******************
	app.put ("api/Admin/:id", function(req, res){
		db.Blog.update(
			req.Visible,
			{
				where: {
					id: req.body.id,
					defaultValue: true
				}
			}).then(function(dbUpdate){
				res.json(dbUpdate);
			})
	});
};