'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require ('body-parser');
var methodOverride = require ('method-override');

module.exports = function (app) {

    app.use(require('connect-livereload')());
    
    app.use (express.static(path.join(__dirname, '..', '..', 'client')));
    app.use (express.static(path.join(__dirname, '..', '..', '.tmp')));

    app.use(methodOverride());
    app.use(bodyParser.json());

    app.use('/api/users', require('../api/users'));

    app.use('/api/contact', require('../api/contact'));

    app.get('*', function (req, res){
	    res.sendFile('../../client/index.html');
	});
}