var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController')

router.get('/', homeController.root);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);
router.get('/terms', homeController.terms);

module.exports = router;