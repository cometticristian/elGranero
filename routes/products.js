var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')

router.get('/', productsController.root);

module.exports = router;