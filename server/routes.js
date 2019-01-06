var controller = require('./controllers');
var router = require('express').Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Connect controller methods to their corresponding routes
router.get('/data', controller.data.get);

module.exports = router;