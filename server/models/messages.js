var db = require('../db');

module.exports = {
  getAll: function () {
    app.get('127.0.0.1:3000', (req, res) => {
      // res.json('hello');
      console.log('hello');
    });
  }, // a function which produces all the messages
  create: function () {} // a function which can be used to insert a message into the database
};
