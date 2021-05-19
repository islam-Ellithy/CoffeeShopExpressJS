const express = require('express');

const coffeePodController = require('../controllers/coffeePodController');

const router = express.Router();

router.get('/', coffeePodController.getCoffeePods);

router.post('/', coffeePodController.addCoffeePod);

router.post('/filter', coffeePodController.filterCoffeePods);


module.exports = router;