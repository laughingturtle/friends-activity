var db = require('./index.js');
var faker = require('faker');

var songList = function(){
  var songs = [];
  for (var i = 0; i < 15; i++) {
      var song = [null, faker.random.words(), faker.name.findName()];
      songs.push(song);  
    }
 // console.log('songs', songs);  
  return songs;
}

var nameList = function(){
  var names = [];
  for (var i = 0; i < 15; i++) {
      var name = [null, faker.name.firstName(), faker.name.lastName()];
      names.push(name);  
    }
 // console.log('songs', songs);  
  return names;
}

var songSql = "INSERT INTO songs (song_id, song_name, artist) VALUES ?";
var nameSql = "INSERT INTO users (user_id, first_name, last_name) VALUES ?";

var songValues = songList();
var nameValues = nameList();

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

songSeed();
nameSeed();

