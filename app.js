const express = require('express');
const app = express();
const routes = require('./routes/index');

app.use(routes);

process.on("uncaughtException", function (err) {
    console.log(err);
});

module.exports = app;