var db = require('../../db/index');

  module.exports = {
      
    lastListenedTo: {
      get: function (cb) {
        db.connection.query('SELECT DISTINCT users.first_name, users.last_name, users.img, songs.song_name, songs.artist, songs.song_id, listen.date_last_play FROM listen JOIN users ON users.user_id=listen.user_id JOIN songs ON songs.song_id=listen.song_id GROUP BY users.last_name ORDER BY listen.date_last_play;', function(err, result){
          if (err){
            throw err;
          } else {
            console.log('result', result); 
            cb(null, result);
          }
        });
      }
    }
  };
