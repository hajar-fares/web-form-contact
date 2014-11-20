'use strict';

var Job = require('./job.model');

var jobs = [
            { _id : "1", title : "Node.js developer"},
            { _id : "2", title : "AngularJS developer"},
            { _id : "3", title : "Rails developer"},
            { _id : "4", title : "Android developer"},
            { _id : "5", title : "iOS developer"}

	    ];

exports.list = function (req, res){
    Job 
    .find()
    .limit(20)
    .sort('-created')
    .exec(function (err, jobs){

    if (err) {
	return res.json(500, err);
    }
    res.json(jobs);
	});
}

exports.show = function (req, res){

	var jobId = req.param('jobId');
	
	Job.findById(jobId, function (err, job){
		if (err) return res.json(500, err);
		if (!job) return res.sendStatus(204);
		res.json(job);
	    });

};

exports.create = function(req, res){
    
    var job = new Job(req.body);
    job.save(function (err){
	    if (err) return res.json(500, err);
	    res.json(job);
	});
}

exports.destroy = function (req, res){
    var jobId = req.param('jobId');
    
    Job.findByIdAndRemove(jobId, function (err, job){
	    if (err) returnres.json(500, err);
	    if (!job) return res.sendStatus(204);
	    res.json(job);
	});
    
};