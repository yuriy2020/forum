var express = require('express');
var router = express.Router();

/* GET account listing. */
router.post('/', function(req, res, next) {
  console.log('here is  user login>>>')
  res.send('here is  user login');
});

module.exports = router;
