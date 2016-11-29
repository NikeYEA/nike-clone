// MODULES //
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var massive = require('massive');
var session = require('express-session');
var config = require('./config.js')
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
app.get('/api/products', function(req, res) {
  console.log("sup");
  db.run("SELECT * FROM PRODUCTS", function(err, products){
    res.status(200).json(products);
  });
  // db.products.find(5, function(err, products){
  //   res.status(200).json(products);
  // }); FIND ALL

  // db.products.findOne({name: req.body.name}, function(err, products){
  //   res.status(200).json(products);
  // }); FIND ONE BY PARAMETER
});
// app.post('/api/products', function( req, res) {
//
// })






app.listen(port, function() {
  console.log('open in port ' + port);
});
