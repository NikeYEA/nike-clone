var app = require('./../index');
var massive = require('massive');
var config = require('./../../config');
var sdrDatabase = massive.connectSync({
	connectionString: config.massiveUri
});
app.set('db', sdrDatabase);
var db = app.get('db');

module.exports = {
	createOrder: function(req, res, next) {
		db.order_create([req.user.id], function(err, order) {
			if (err) {
				return res.status(500)
					.send(err);
			}
			console.log('NEW ORDER ID:', order.id);

			if (req.user) {
				req.user.order_id = order.id;
			}
			res.status(200)
				.send('Order created successfully');
		});
	},
	completeOrder: function(req, res, next) {
		db.order_complete([req.user.order_id], function(err, order) {
			if (err) {
				return res.status(500)
					.send(err);
			}
			next();
		});
	},
	getUserOrder: function(req, res, next) {
		console.log(req.params.userid);
		var completeOrder = {};
		db.order_by_user([req.user.id], function(err, order) {
			if (err) {
				console.log(err);
				return res.status(500)
					.send(err);
			}

			completeOrder.order = order[0];
			db.product_cart_find([completeOrder.order.id], function(err, products) {
				if (err) {
					console.log(err);
					return res.status(500)
						.send(err);
				}

				completeOrder.products = products;
				res.status(200)
					.send(completeOrder);
			});
		});
	},
	getUserHistory: function(req, res, next) {
		db.order_history_by_user([req.params.userid], function(err, orders) {
			if (err) {
				return res.status(500)
					.send(err);
			}
			res.status(200)
				.send(orders);
		});
	},
};
