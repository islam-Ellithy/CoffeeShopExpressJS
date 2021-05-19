const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const coffeeMachineSchema = new Schema({
  productType: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    required: true,
    unique: true
  },
  model: {
    type: String,
    required: false
  },
  waterLineCompatible: {
    type: Boolean,
    required: false,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('coffee_machine', coffeeMachineSchema);