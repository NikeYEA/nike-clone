var app = require('./../index');
var db = app.get('db');

module.exports = {
  getWomensShoes: function(req,res,next){
    db.womens.product_womens(function(err, products){
      if (err) {
        console.log(err);
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products);
    })
  },
  getWomensLifestyle: function(req,res,next){
    db.womens.product_womens_lifestyle(function(err, products){
      if (err) {
        console.log(err);
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products);
    })
  },
  getWomensRunning: function(req,res,next){
    db.womens.product_womens_running(function(err, products){
      if (err) {
        console.log(err);
        return res.status(500)
          .send(err);
      }
      res.status(200)
        .send(products);
    })
  },
  getWomensTraining: function(req,res,next){
    db.womens.product_womens_training(function(err, products){
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