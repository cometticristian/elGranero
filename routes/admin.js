var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController')

router.get('/products', adminController.root);

module.exports = router;