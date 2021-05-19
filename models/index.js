const mongoose = require('mongoose');



// models
const coffeeMachineModel = require('./schemas/coffeeMachine');
const coffeePodModel = require('./schemas/CoffeePod');

module.exports = {
    coffeeMachineModel,
    coffeePodModel
};