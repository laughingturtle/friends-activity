var db = require('./index.js');
var faker = require('faker');

var songs = [];
var names = [];
var listen = [];

songsData = [
  {
  name:"Dream",
  time: "1:16",
  artist: "Jared Horne",
  album: "Dream Tour",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/Dream.mp3",
  playlist_name: "Pop"
  },
  {
  name:"epic",
  time: "1:34",
  artist: "Jared Horne",
  album: "Dream Tour",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/Epic.mp3",
  playlist_name: "Jazz"
  },
  {
  name:"Float",
  time: "1:17",
  artist: "Jared Horne",
  album: "Dream Tour",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/Float.mp3",
  playlist_name: "Rock"
  },
  {
  name:"GoodBye",
  time: "1:11",
  artist: "Jared Horne",
  album: "Dream Tour",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/Goodbye.mp3",
  playlist_name: "Rock"
  },
  {
  name:"Happy",
  time: "2:21",
  artist: "Jared Horne",
  album: "Dream Tour",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/Happy.mp3",
  playlist_name: "Rock"
  },
  {
  name:"Life",
  time: "1:54",
  artist: "Jared Horne",
  album: "Dream Tour1",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/Life.mp3",
  playlist_name: "Jazz"
  },
  {
  name:"Piece",
  time: "1:44",
  artist: "Jared Horne",
  album: "Dream Tour1",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/Peace.mp3",
  playlist_name: "Rock"
  },
  {
  name:"SciFi",
  time: "1:03",
  artist: "Jared Horne",
  album: "Dream Tour1",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/SciFi.mp3",
  playlist_name: "Pop"
  },
  {
  name:"Sunshine",
  time: "1:49",
  artist: "Jared Horne",
  album: "Dream Tour1",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/Sunshine.mp3",
  playlist_name: "Pop"
  },
  {
  name:"Triumph",
  time: "2:25",
  artist: "Jared Horne",
  album: "Dream Tour1",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/Triumph.mp3",
  playlist_name: "Rock"
  },
  {
  name:"Wonder",
  time: "0:46",
  artist: "Jared Horne",
  album: "Dream Tour1",
  file_url: "https://s3.us-east-2.amazonaws.com/rpt10-mondaymonday-songs/Wander.mp3",
  playlist_name: "Pop"
  },
];


var songList = function(){
  console.log('my data: ', songsData); 
console.log('my data: ', songsData[0].name); 
 for (var i = 0; i < 11; i++) {
     var song = [i, songsData[i].name, songsData[i].artist, songsData[i].file_url, songsData[i].album, songsData[i].time, songsData[i].playlist_name];
     songs.push(song);  
   }
 console.log('songs', songs);  
 return songs;
}

// var songList = function(){
//   for (var i = 0; i < 20; i++) {
//       var song = [i, faker.random.words(), faker.name.findName()];
//       songs.push(song);  
//     }
//   console.log('songs', songs);  
//   return songs;
// }

var nameList = function(){
  for (var i = 0; i < 11; i++) {
      var name = [null, faker.name.firstName(), faker.name.lastName(), faker.random.image(50,50)];
      names.push(name);  
    }
  console.log('names', names);  
  return names;
}

var listenList = function(){
  for (var i = 0; i < 11; i++) {
      var listenedto = [null, Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), faker.date.recent()];
      listen.push(listenedto);  
    }
  console.log('listen', listen);  
  return listen;
}

var songSql = "INSERT INTO songs (song_id, song_name, artist, song_url, song_album, song_time, song_playlist) VALUES ?";
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