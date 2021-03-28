var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')

router.get('/', productsController.root);
router.get('/detail/:productId', productsController.detail);
router.get('/create', productsController.create);
router.get('/edit/:productId', productsController.edit);

module.exports = router;