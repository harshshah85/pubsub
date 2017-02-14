'use strict';

var axon = require('axon');
var socket = axon.socket('pub');

socket.bind(8081);

/* send the image to pub */
exports.send = function(image){
	socket.send(image);
}