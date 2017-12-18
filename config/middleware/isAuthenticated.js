module.exports = function(req, res, next) {

	app.get('/auth/facebook',
  	passport.authenticate('facebook'));

	app.get('/auth/facebook/callback',
  	passport.authenticate('facebook', { failureRedirect: '/login' }),
 	 function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  	});




  // if (req.user) {
  //   return next();
  // }

  // return res.redirect("/");
};
