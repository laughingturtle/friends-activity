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
}};
