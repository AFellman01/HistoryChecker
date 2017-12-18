var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;


var db = require("../models");

passport.use(new FacebookStrategy({
    clientID: 196629500887340,
    clientSecret: "ab04b8c996c49ea8b13e0a8bee6a281a",
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
