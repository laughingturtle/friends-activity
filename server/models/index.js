var Producer = require('sqs-producer');
var db = require('../../db/index');


var producer = Producer.create({
  queueUrl: 'https://sqs.us-east-2.amazonaws.com/021058984666/song-queue',
   region: 'us-east-2',
  accessKeyId:  process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_access_key
});

  module.exports = {
      
    lastListenedTo: {
      get: function (cb) {
        db.connection.query('SELECT users.first_name, users.last_name, users.img, songs.song_name, songs.artist, songs.song_id, songs.song_url, listen.date_last_play FROM listen JOIN users ON users.user_id=listen.user_id JOIN songs ON songs.song_id=listen.song_id GROUP BY users.last_name ORDER BY listen.date_last_play;', function(err, result){
          if (err){
            throw err;
          } else {
            console.log('result', result); 
            cb(null, result);
          }
        });
      }
    },
    postSongToSQSqueue: {
      post: function (song, cb) {
        console.log('the  model is sending this song: ', song);
        producer.send([{
            id: '1',
            body: JSON.stringify({songName: song.song_name, songUrl: song.song_url,  songArtist: song.artist})
          }], function(err) {
            if (err){
              console.log(err);
          } else {
            console.log('your sqs succeeded');
          }
        });
      }
    }
  };



  
  