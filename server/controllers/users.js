var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((results) => {
      res.json(results);
    });
  },
  post: function (req, res) {
    var username = 'a username';
    models.users.create(username);
  }
};
