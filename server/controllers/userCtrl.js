var app = require('./../index');
var db = app.get('db');

var bcrypt = require('bcryptjs');

function hashPassword(password) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  return hash;
}

module.exports = {
	createUser: function(req, res, next) {

		db.user_create([req.body.name, req.body.email, req.body.mobile_phone], function(err, user) {
			if (err) {
				return res.status(500)
					.send(err);
			}

			user = user[0];
			db.order_create([user.id], function(err, order) {
				if (err) {
					return res.status(500)
						.send(err);
				}
				res.status(200)
					.send('User and Order created successfully');
			});
		});
	},
	getUsers: function(req, res, next) {
		db.users(function(err, users) {
			if (err) {
console.log(err);

				return res.status(500)
					.send(err);
			}
			res.status(200)
				.send(users);
		});
	},
	register: function(req, res, next) {
    var user = req.body;

    user.password = hashPassword(user.password);

    user.email = user.email.toLowerCase();

    db.user.user_create([user.name, user.email, user.password, user.mobile_phone], function(err, newUser) {
			console.log('this is the user.mobilephone', user.mobile_phone);
      if (err) {
        console.log("Registration err: ", err);
        return res.status(401).send(err);
      }
      res.status(200).send('User created successfully!');
    })
  },

  me: function(req, res, next) {
		console.log('this is req.user: ',req.user);
    if (!req.user) {
      res.status(401).send('User is not logged in');

    }
    var user = req.user;
    delete user.password;
    res.status(200).send(user);
  },

  update: function(req, res, next) {
    var updateUser = req.body;

    updateUser.id = req.user.id;

    db.users.save(updateUser, function(err, user) {
      if (err) {
				console.log('User update error', err);

				return res.status(401)
					.send(err);
			}

      req.user = user;

      delete user.password;

      res.status(200).send(user);
    })
  }
};
