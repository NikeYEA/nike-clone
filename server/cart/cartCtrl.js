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


// module.exports = {
//   getCart: function(req, res) {
//     var body = req.body;
//     db.get_cart(function(err, cart) {
//       if (err) {
//         console.log(err);
//       // } else {
//       //   var user_id = body.user_id;
//       //   var product_id = body.product_id;
//       //   var price = body.price;
//       //   var query = db.get_cart
//       //   var insert = [user_id, product_id, price, quantity];
//       // }
//     })
//   }
// }
