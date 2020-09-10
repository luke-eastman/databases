DROP DATABASE chat;
CREATE DATABASE chat;
USE chat;
CREATE TABLE messages (
  id INT AUTO_INCREMENT,
  user_id INT,
  room_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  message_text TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT,
  name TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE rooms_messsages (
  id INT AUTO_INCREMENT,
  room_id INT,
  message_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  name TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE users_friends (
  id INT AUTO_INCREMENT,
  user_id INT,
  friend_user_id INT,
  PRIMARY KEY (id)
);

ALTER TABLE messages
ADD FOREIGN KEY (user_id) REFERENCES users(id),
ADD FOREIGN KEY (room_id) REFERENCES rooms(id);

ALTER TABLE rooms_messsages
ADD FOREIGN KEY (room_id) REFERENCES rooms(id),
ADD FOREIGN KEY (message_id) REFERENCES messages(id);

ALTER TABLE users_friends
ADD FOREIGN KEY (user_id) REFERENCES users(id),
ADD FOREIGN KEY (friend_user_id) REFERENCES users(id);
-- <NAME-OF-COL><DATA-TYPE-OF-COL>[addition info],


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

