var app = require('./../index');
var massive = require('massive');
var config = require('./../../config');
var sdrDatabase = massive.connectSync({
	connectionString: config.massiveUri
});
app.set('db', sdrDatabase);
var db = app.get('db');
var client = require('twilio')('ACe9d83d04deacdf40673b9822f3addee7','68d5e4fbb222435cb64e698b01589eb7');



module.exports = {
  getTwilioImages: function(req, res, next) {

      console.log('this is the   req.user.order_id: ',req.user.order_id);
    db.twiliocheckout([req.user.order_id], function(err, cart) {

      console.log(" THIS IS THE   CART: ", cart);

      var imgArr = [];
      for (var i = 0; i < cart.length; i++) {
        imgArr.push(cart[i].img);
      }

    //   console.log('this is twilio: ',twilio);
    //   if (err) {
    //     console.log('TWILIO ERROR: ',err);
    //     return res.status(500)
    //       .send(err);
    //   }
    // var x = twilio.map(function(el) {
    //     console.log('el.img:',el.img);
    //     return el.img;
    //   })
    //   console.log('this is the mother  XXXXXXX: ',x);

      client.sendMessage({
        to:'+18016945874',
        from: '+13857071154',
        body: 'Here is your shit',
        mediaUrl: imgArr
      }, function(err, twilio) {
        if(err) {
          console.log(err);
        } else {
          console.log(twilio);
        }

      })
    })
  }
};
