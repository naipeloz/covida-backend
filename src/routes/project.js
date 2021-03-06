var express = require('express');
var router = express.Router();
var multer = require('multer')
const ProjectController = require('../controllers/project');
var upload = multer({dest : 'uploads'});


router.get('/', function(req, res, next) {
    ProjectController.getAll(req, res);
});
router.get('/filter/:zone/:category', function(req, res, next) {
    ProjectController.getFiltered(req, res);
})

router.get('/category/:id', function(req, res, next) {
    ProjectController.getByCategoryId(req, res);
});
router.post('/create', function(req, res, next) {
    ProjectController.create(req, res);
});

router.post('/createAll', function(req, res, next) {
    ProjectController.createAll(req, res);
});
router.post('/create/csv', upload.single('myFile'), function(req, res, next) {
    ProjectController.createCsv(req, res);
});

module.exports = router;
