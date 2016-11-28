
var express = require('express');
var cors = require('cors');
var massive = require('massive');
var bodyParser = require('body-parser');
var config = require('../../config');
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));
var port = config.port;
var massiveUri = 'postgres://sbdvsvar:mIJA3-s6iQjcKTXrnyslBzgpSHHaibBr@elmer.db.elephantsql.com:5432/sbdvsvar';
var massiveServer = massive.connectSync({
	connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

var userCtrl = require('./controllers/userCtrl');
var orderCtrl = require('./controllers/orderCtrl');
var productCtrl = require('./controllers/productsCtrl');

app.post('/api/user', userCtrl.createUser);
app.get('/api/user', userCtrl.getUsers);

app.post('/api/order/:userid', orderCtrl.createOrder);
app.put('/api/order/complete/:orderid/:userid', orderCtrl.completeOrder, orderCtrl.createOrder);
app.get('/api/order/:userid', orderCtrl.getUserOrder);
app.get('/api/order/completed/:userid', orderCtrl.getUserHistory);

app.get('/api/products', productCtrl.getProducts);
app.get('/api/in/cart/:cartid', productCtrl.getInCart);
app.post('/api/add/item/cart/:cartid', productCtrl.addToCart);
app.put('/api/update/qty/:productid', productCtrl.updateProductInCart);
app.delete('/api/delete/item/cart/:productid', productCtrl.deleteCartItem);


app.listen(port, function() {
	console.log('Listening on port ' + port);
});
