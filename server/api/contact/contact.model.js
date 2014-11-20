'use strict';

var mongoose = require ('mongoose');

var JobSchema = new mongoose.Schema ({

	title : {type : String, required : true },
	description: {type : String, required : false },
	publisher: {type : String, required : true}, 
	created : {type : Date, default : Date.now},
	location : {type : String, required : false},
	duration : {type : String, required : false},
	price : {type : String, required : false},
	start : {type : String, required : false}
 });

module.exports = mongoose.model('Job', JobSchema);