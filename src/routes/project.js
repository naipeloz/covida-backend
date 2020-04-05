var express = require('express');
var router = express.Router();
const ProjectController = require('../controllers/project');

router.get('/', function(req, res, next) {
    ProjectController.getAll(req, res);
});
router.get('/category/:id', function(req, res, next) {
    ProjectController.getByCategoryId(req, res);
});

router.post('/create', function(req, res, next) {
    ProjectController.create(req, res);
});

router.post('/createAll', function(req, res, next) {
    ProjectController.createAll(req, res);
});

module.exports = router;
