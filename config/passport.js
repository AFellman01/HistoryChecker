var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;


var db = require("../models");

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
// passport.use(new LocalStrategy(
//   {
//     usernameField: "email"
//   },
//   function(email, password, done) {
//     db.User.findOne({
//       where: {
//         email: email
//       }
//     }).then(function(dbUser) {
//       if (!dbUser) {
//         return done(null, false, {
//           message: "Incorrect email."
//         });
//       }
//       else if (!dbUser.validPassword(password)) {
//         return done(null, false, {
//           message: "Incorrect password."
//         });
//       }
//       return done(null, dbUser);
//     });
//   }
// ));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
