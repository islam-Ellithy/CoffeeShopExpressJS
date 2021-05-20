const mongoose = require('mongoose');



// models
const coffeeMachineModel = require('./schemas/coffeeMachine');
const coffeePodModel = require('./schemas/coffeePod');

module.exports = {
    coffeeMachineModel,
    coffeePodModel
};
