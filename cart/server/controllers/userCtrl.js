var app = require('./../index');
var db = app.get('db');

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
};
