// MODULES //
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var massive = require('massive');
var session = require('express-session');
var _ = require('underscore');


// SERVER //
var config = require('../config');
var productsCtrl = require('./products/productsCtrl');


// PORT //
var port = config.port;

// EXPRESS //

var app = module.exports = express();
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
app.use(cors());

// MASSIVE //
var sdrDatabase = massive.connectSync({
  connectionString: config.massiveUri
});
app.set('db', sdrDatabase);
var db = app.get('db');


// PRODUCTS //
app.get('/api/products', productsCtrl.getProducts);

app.get('/api/products/:id', productsCtrl.getProductById);


// CART //

// app.get('/api/cart', cartCtrl.getCart);


















app.listen(port, function() {
  console.log('open in port ' + port);
});
