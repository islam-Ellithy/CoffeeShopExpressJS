const express = require('express');

const coffeeMachineController = require('../controllers/coffeeMachineController');

const router = express.Router();

router.get('/', coffeeMachineController.getCoffeeMachines);

router.post('/', coffeeMachineController.addCoffeeMachine);

router.post('/filter', coffeeMachineController.filterCoffeeMachines);

module.exports = router;