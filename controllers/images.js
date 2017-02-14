'use strict';

var _ = require('underscore');
var model = require('../models/images');

//send images to a controller
exports.save = function(req, res, next){
	var images = _.clone(req.body);
	model.save(images, function(err){
		if(err) return res.json(503, {error:true});
		next();
		model.trim();
	})
};

// sends images to the pub-sub
exports.send = function(req, res, next){
	var images = _.clone(req.body);
	model.send(images, function(err){
		if(err) return res.json(503, {error:true});
		res.json(200, {error:null});
	});
};

/*Get Images*/
exports.get = function(req, res){
	model.get(function(err, data){
		if(err) return res.json(503, {error:true});
		res.json(200, data);
	});
}