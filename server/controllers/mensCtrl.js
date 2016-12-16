var app = require('./../index');
var massive = require('massive');
var config = require('./../../config');
var sdrDatabase = massive.connectSync({
	connectionString: config.massiveUri
});
app.set('db', sdrDatabase);
var db = app.get('db');

module.exports = {
  getMensShoes: function(req, res, next) {
    db.mens.products_mens(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getMensBasketball: function(req, res, next) {
    db.mens.product_mens_basketball(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getMensJordan: function(req, res, next) {
    db.mens.product_mens_jordan(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getMensRunning: function(req, res, next) {
    db.mens.product_mens_running(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getMensSoccer: function(req, res, next) {
    db.mens.product_mens_soccer(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getMensSportswear: function(req, res, next) {
    db.mens.product_mens_sportswear(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  },

  getMensTraining: function(req, res, next) {
    db.mens.product_mens_training(function(err, products) {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products)
    });
  }
}
