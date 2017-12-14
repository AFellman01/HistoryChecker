var db = require("../models");
module.exports = function (app) {
	app.post ("api/credential", function (req, res){
		db.Credential.create(req.Credo).then(function(dbCredential){
			res.json(dbCredential);
		});
	});

}