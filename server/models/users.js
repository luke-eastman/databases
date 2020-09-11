var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM users';
    db.query(queryString, (err, results) => {
      if (err) {
        throw err;
      }
      callback(results);
    });
  },
  create: function (username) {
    var params = [username];
    var queryString = 'INSERT INTO users (name) VALUES (?)';
    db.query(queryString, params, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

// adds user to DB