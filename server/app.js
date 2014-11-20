'use strict';

var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://epitech:epitech@ds033390.mongolab.com:33390/sandbox');

mongoose.connection.on('open', function()
{
    console.log('Connected to MongoDB');
});


var app = express();

require('./config/routes')(app);

app.listen(process.env.PORT || 9000);

console.log("server is running");

module.exports = app;