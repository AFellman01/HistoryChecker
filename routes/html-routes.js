var path = require('path');
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
	app.get("/", function (req, res){
		if (req.user) {
			res.redirect("/members");
		}
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
}

// 	app.get("/search", function(req, res) {
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/search.html"));
//   });

//   app.get("/admin", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/admin.html"));
//   });
// }   