var db = require("../models")
module.exports = function(app) {
	app.post("/api/Admin", function(req, res){
		console.log(req)
		db.Admin.create(req.param.id, req.email, req.password, req.name, req.DateOfBirth)
		.then(function(dbAdmin){
			res.json(dbAdmin)
		});
	});

	app.post("/api/Admin/:id",function(req, res){
		db.Admin.destroy({
			where: {
				id: req.param,id
			}
		}).then(function(dbAdmin){
			res.json(dbAdmin);
		})
	})
}