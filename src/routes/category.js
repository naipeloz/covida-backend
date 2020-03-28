var express = require('express');
var router = express.Router();
const CategoryController = require('../controllers/category');

router.get('/', function(req, res, next) {
    CategoryController.getAll(req, res);
});
router.get('/section/:id', function(req, res, next) {
    CategoryController.getBySectionId(req, res);
});

router.post('/create', function(req, res, next) {
    CategoryController.create(req, res);
});

module.exports = router;
