var app = require('./../index');
var massive = require('massive');
var config = require('./../../config');
var sdrDatabase = massive.connectSync({
	connectionString: config.massiveUri
});
app.set('db', sdrDatabase);
var db = app.get('db');

module.exports = {
  getGirlsShoes: function(req,res,next){
    db.girls.product_girls(function(err, products){
      if (err) {
        console.log(err);
        return res.status(500)
          .send(err);

      }
      res.status(200)
        .send(products);
    })
  },

  getGirlsBasketball: function(req,res,next){
    db.girls.product_girls_basketball(function(err, products){
      if (err) {
        console.log(err);
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products);
    })
  },
  getGirlsJordan: function(req,res,next){
    db.girls.product_girls_jordan(function(err, products){
      if (err) {
        console.log(err);
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products);
    })
  },
  getGirlsLifestyle: function(req,res,next){
    db.girls.product_girls_lifestyle(function(err, products){
      if (err) {
        console.log(err);
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products);
    })
  },
  getGirlsRunning: function(req,res,next){
    db.girls.product_girls_running(function(err, products){
      if (err) {
        console.log(err);
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products);
    })
  },
  getGirlsSoccer: function(req,res,next){
    db.girls.product_girls_soccer(function(err, products){
      if (err) {
        console.log(err);
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products);
    })
  }

};
