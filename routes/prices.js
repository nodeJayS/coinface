var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Crypto top 100');
});

module.exports = router;