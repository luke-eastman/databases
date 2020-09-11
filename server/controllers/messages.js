var models = require('../models');
var dbConnection = ('../db');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      console.log(results);
      res.json(results);
    });
  },
  post: function (req, res) {
    var message = req.json('text');
    var username = req.json('username');
    var roomname = req.json('roomname');

    models.messages.create(message, username, roomname);


    //    });
  } // a function which handles posting a message to the database
};
