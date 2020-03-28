var express = require('express');
var router = express.Router();
const ZoneController = require('../controllers/zone');

router.get('/', function(req, res, next) {
    ZoneController.getAll(req, res);
});

router.post('/create', function(req, res, next) {
    ZoneController.create(req, res);
});

module.exports = router;
