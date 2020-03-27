var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('Aca empieza este incrible proyecto');
});

module.exports = router;
