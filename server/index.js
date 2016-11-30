
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
// client.sendMessage({
//
//     to:'+18016945874', // Any number Twilio can deliver to
//     from: '+13857071154', // A number you bought from Twilio and can use for outbound communication
//     body: 'word to your mother.' // body of the SMS message
//
// }, function(err, responseData) { //this function is executed when a response is received from Twilio
//
//     if (!err) { // "err" is an error received during the request, if any
//
//         // "responseData" is a JavaScript object containing data received from Twilio.
//         // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
//         // http://www.twilio.com/docs/api/rest/sending-sms#example-1
//
//         console.log(responseData.from); // outputs "+14506667788"
//         console.log(responseData.body); // outputs "word to your mother."
//
//     }
// });

app.listen(port, function() {
	console.log('Listening on port ' + port);
});
