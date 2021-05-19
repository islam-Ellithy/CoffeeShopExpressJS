const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const coffeePodSchema = new Schema({
  sku: {
    type: String,
    required: true,
    unique: true
  },
  productType: {
    type: String,
    required: true
  },
  coffeeFlavor: {
    type: String,
    required: true
  },
  packSize: {
    type: Number,
    required: true
  },

}, {
  timestamps: true
});

module.exports = mongoose.model('coffee_pod', coffeePodSchema);