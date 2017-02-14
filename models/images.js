'use strict';
var redis = require('../lib/redis');
var broadcast = require('../lib/broadcast');
//save images to db
/* 	param {array} images
	param {Function} is a callback */
exports.save = function(images, callback){
	if(!images.length) return callback(null, null);
	var image = images.pop();
	redis.lpush('images', JSON.stringify(image), function(err){
		if(err) callback(err, null);
		exports.save(images, callback);

	});
};


/* Trims the redis list */
exports.trim = function(){
	redis.ltrim('images', 0, 9);
};

/* Send out images */
exports.send = function (images, callback) {
	/*images.forEach(broadcast.send);*/
	callback(null, null);	
};

/* Get Images from Redis */
exports.get = function(callback){
	redis.lrange('images', 0, -1, function(err, data){
		if(err) return callback(err, null);
		callback(null, data.map(JSON.parse));
	});
};