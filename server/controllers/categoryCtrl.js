var app = require('./../index');
var db = app.get('db');

module.exports = {
  menrunning: function(req, res, next) {
    db.men_running(function(err, menrunning) {
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(menrunning);
    })
  }

}
