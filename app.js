// JavaScript Document

'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var images = require('./controllers/images');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/', images.save, images.send, function(req, res){
	res.send('\ndone\n');
});

app.get('/images', images.get);

app.listen(8080, function(){
	console.log('Server is listening on port %d', 8080);
});