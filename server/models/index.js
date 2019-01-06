var db = require('../../db/index');

  module.exports = {
      
    lastListenedTo: {
      get: function (cb) {
        db.connection.query('SELECT * FROM listen ORDER BY date_last_play DESC;', function(err, result){
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
