// MODULES //
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var massive = require('massive');
var session = require('express-session');
var _ = require('underscore');

// SERVER //
var config = require('../../config');
// EXPRESS //
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

// EXPRESS //
var sdrDatabase = massive.connectSync({
  connectionString: config.massiveUri
});
app.set('db', sdrDatabase);
var db = app.get('db');

module.exports = {
  getProducts: function(req, res, next) {
      db.get_products(function(err, products){
        res.status(200).json(products);
    })
  },

  getProductById: function(req, res, next) {
      db.get_products(function(err, products) {
      var productId = parseInt(req.params.id, 10);
      var matchedProduct = _.findWhere(products, {id: productId})
      if(matchedProduct) {
        res.json(matchedProduct)
      } else {
        res.status(404).send('Not Found')
      }
    })
  }

























}
