var app = require('./../index');
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














}
