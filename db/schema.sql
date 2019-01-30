DROP DATABASE IF EXISTS friends;
CREATE DATABASE friends;

USE friends;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(125),
  last_name VARCHAR(125),
  img VARCHAR(250)
);
 
DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
  song_id INT,
  song_name VARCHAR(250),
  artist VARCHAR(250),
  song_url VARCHAR(250),
  song_album VARCHAR(250),
  song_time VARCHAR(250),
  song_playlist VARCHAR(250)
);

DROP TABLE IF EXISTS listen;

CREATE TABLE listen (
  listen_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  song_id INT,
  date_last_play DATETIME
  -- FOREIGN KEY (user_id)
  --     REFERENCES users (user_id)
  --     ON UPDATE CASCADE
  --     ON DELETE RESTRICT,
  -- FOREIGN KEY (song_id)
  --     REFERENCES songs (song_id)
  --     ON UPDATE CASCADE
  --     ON DELETE RESTRICT
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/


