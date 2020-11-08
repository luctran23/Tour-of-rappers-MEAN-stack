var express = require('express');
var router = express.Router();
var controller = require('../controllers/rapper.controller');
    
router.get('/', controller.index);

//SPECIFIC RAPPER
router.get('/:id', controller.specific);

module.exports = router;