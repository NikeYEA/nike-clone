// PASSPORT //
var passport = require('passport');
var LocalStrategy = require('passport-local')
	.Strategy;

// BCRYPT //
var bcrypt = require('bcryptjs');

// APP //
var app = require('./../index');
var db = app.get('db');

function verifyPassword(submitedPass, userPass) {
  return bcrypt.compareSync(submitedPass, userPass);
}

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, done) {
  email = email.toLowerCase();
  db.user.user_search_email([email], function(err, user) {
    user = user[0];

    if (err) {
      return done(err)
    }

    if (!user) {
      return done(null, false)
    }

    if (verifyPassword(password, user.password)) {
      return done(null, user)
    }

    return done(null, false);
  })
}));

passport.serializeUser(function(user, done) {
	// console.log(user);
  done(null, user.id)
});
passport.deserializeUser(function(id, done) {
	console.log(id);
  db.user.user_search_id([id], function(err, user) {
		console.log(err, user);
    done(err, user[0]);
  })
});

module.exports = passport;
