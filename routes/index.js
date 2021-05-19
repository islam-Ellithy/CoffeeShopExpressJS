const express = require('express');

const coffeeMachineRoutes = require("./coffeeMachineRoutes");
const coffeePodRoutes = require("./coffeePodRoutes");
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/coffee-machines', coffeeMachineRoutes);
app.use('/coffee-pods', coffeePodRoutes);


module.exports = app;