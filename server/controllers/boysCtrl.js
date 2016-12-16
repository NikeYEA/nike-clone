var app = require('./../index');
var massive = require('massive');
var config = require('./../../config');
var sdrDatabase = massive.connectSync({
	connectionString: config.massiveUri
});
app.set('db', sdrDatabase);
var db = app.get('db');

module.exports = {
  getBoysShoes: function(req, res, next) {
    db.boys.products_boys(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getBoysBasketball: function(req, res, next) {
    db.boys.product_boys_basketball(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getBoysJordan: function(req, res, next) {
    db.boys.product_boys_jordan(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getBoysLifestyle: function(req, res, next) {
    db.boys.product_boys_lifestyle(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getBoysRunning: function(req, res, next) {
    db.boys.product_boys_running(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getBoysSoccer: function(req, res, next) {
    db.boys.product_boys_soccer(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  }
}
