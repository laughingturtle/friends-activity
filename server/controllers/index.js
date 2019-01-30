var models = require('../models');

module.exports = {
  data: {
    get: (req, res) => {
      models.lastListenedTo.get ((err, result) => {
        if (err) {
          res.status(404).json(err);
        } else {
          res.send(result);
        }
      });
    }
  },
  songs: {  
    post: (req, res) => {
      console.log('my song on the server', req.body);
      var message = {song_name: req.body.mySong.song_name, song_url: req.body.mySong.song_url,  artist:req.body.mySong.artist};
      console.log(message);
      models.postSongToSQSqueue.post(message, (err, result) => {
        if (err) {
          res.status(404).json(err);
        } else {
          res.send("Success in Controller!");
        }
      });
    }
  } 
};


