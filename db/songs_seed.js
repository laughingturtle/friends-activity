var db = require('./index.js');
var faker = require('faker');

var songList = function(){
  var songs = [];
  for (var i = 0; i < 15; i++) {
      var song = [null, faker.random.words(), faker.name.findName()];
      songs.push(song);  
    }
  return songs;
}

var sql = "INSERT INTO Songs (song_id, song_name, artist) VALUES ?";
var values = songlist();

var doSeed = function() {
    db.query(sql, [values], function(err) {
      if (err) {
        throw err;
      } else {
        console.log('database song seeding successful');
      }
    }
)};

doSeed();