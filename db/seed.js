var db = require('./index.js');
var faker = require('faker');

var songs = [];
var names = [];
var listen = [];

var songList = function(){
  for (var i = 0; i < 20; i++) {
      var song = [i, faker.random.words(), faker.name.findName()];
      songs.push(song);  
    }
  console.log('songs', songs);  
  return songs;
}

var nameList = function(){
  for (var i = 0; i < 20; i++) {
      var name = [null, faker.name.firstName(), faker.name.lastName(), faker.random.image(50,50)];
      names.push(name);  
    }
  console.log('names', names);  
  return names;
}

var listenList = function(){
  for (var i = 0; i < 20; i++) {
      var listenedto = [null, Math.floor(Math.random() * 15), Math.floor(Math.random() * 15), faker.date.recent()];
      listen.push(listenedto);  
    }
  console.log('listen', listen);  
  return listen;
}

var songSql = "INSERT INTO songs (song_id, song_name, artist) VALUES ?";
var nameSql = "INSERT INTO users (user_id, first_name, last_name, img) VALUES ?";
var listenSql = "INSERT INTO listen (listen_id, user_id, song_id, date_last_play) VALUES ?";

var songValues = songList();
var nameValues = nameList();
var listenValues = listenList();

var songSeed = function() {
  db.connection.query(songSql, [songValues], function(err) {
    if (err) {
      throw err;
    } else {
      console.log('database song seeding successful');
    }
  })
};
var nameSeed = function() {
  db.connection.query(nameSql, [nameValues], function(err) {
    if (err) {
      throw err;
    } else {
      console.log('database name seeding successful');
    }
  })
};
var listenSeed = function() {
  db.connection.query(listenSql, [listenValues], function(err) {
    if (err) {
      throw err;
    } else {
      console.log('database listen list seeding successful');
    }
  })
};

songSeed();
nameSeed();
listenSeed();