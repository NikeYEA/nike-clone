var express = require('express');
var cors = require('cors');
var massive = require('massive');
var bodyParser = require('body-parser');
var config = require('../config');
var client = require('twilio')(config.accountSid, config.authToken);
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));
var port = config.port;

var sdrDatabase = massive.connectSync({
	connectionString: config.massiveUri
});
app.set('db', sdrDatabase);
var db = app.get('db');

var userCtrl = require('./controllers/userCtrl');
var orderCtrl = require('./controllers/orderCtrl');
var productCtrl = require('./controllers/productsCtrl');
// USER //
app.post('/api/user', userCtrl.createUser);
app.get('/api/user', userCtrl.getUsers);
// ORDER //
app.post('/api/order/:userid', orderCtrl.createOrder);
app.put('/api/order/complete/:orderid/:userid', orderCtrl.completeOrder, orderCtrl.createOrder);
app.get('/api/order/:userid', orderCtrl.getUserOrder);
app.get('/api/order/completed/:userid', orderCtrl.getUserHistory);
// PRODUCTS //
app.get('/api/products', productCtrl.getProducts);
app.get('/api/products/:id',productCtrl.getProductById);
// CART //
app.get('/api/in/cart/:orderid', productCtrl.getInCart);
app.post('/api/add/item/cart/:orderid', productCtrl.addToCart);
app.put('/api/update/qty/:productid', productCtrl.updateProductInCart);
app.delete('/api/delete/item/cart/:productid', productCtrl.deleteCartItem);

// TWILIO //
app.get('/testtwilio', function(req, res) {
	client.sendMessage({
		to:'+18016945874',
		from: '+13857071154',
		body: 'Yo what up, booooiiiissss'
	}, function(err, data) {
		if(err) {
			console.log(err);
		} else {
			console.log(data);
		}
	})
})


app.listen(port, function() {
	console.log('Listening on port ' + port);
});
