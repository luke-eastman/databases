var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT messages.id, messages.message_text, messages.room_id, \
                      users.name from messages left outer join users on(messages.user_id = users.id)';
    db.query(queryString, (err, results) => {
      if (err) {
        throw err;
      }
      callback(err, results);
    });
  },
  create: function (message, username, roomname) {
    var params = [message, username, roomname];
    var queryString = 'INSERT INTO messages (message_text, user_id, room_id) \
                       VALUES (?, (SELECT id FROM users WHERE name = ? LIMIT 1), ?)';
    db.query(queryString, params, (err) => {
      if (err) {
        throw err;
      }
    });
  } // a function which can be used to insert a message into the database
};
