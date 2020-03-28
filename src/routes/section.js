var express = require('express');
var router = express.Router();
const SectionController = require('../controllers/section');

router.get('/', function(req, res, next) {
    SectionController.getAll(req, res);
});

router.post('/create', function(req, res, next) {
    SectionController.create(req, res);
});

module.exports = router;
