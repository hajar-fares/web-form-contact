angular.module('app', ['ngResource', 'ngRoute']);

function Config($routeProvider){

    $routeProvider.when('/jobs',{
            templateUrl : 'app/jobs/job-list.html',
                controller : 'JobsCtrl',
		resolve:{
		jobs : function(Job) {
                    return Job.query().$promise;
                }
            }
        });

    $routeProvider.when('/jobs/:jobId',{
	    templateUrl : 'app/jobs/job-detail.html',
		controller : 'JobDetailCtrl',
		resolve : {
		job : function ($route, Job){
		    var id = $route.current.params.jobId;
		    return Job.get({jobId : id}).$promise;
		}
	    }
	});
    
    $routeProvider.otherwise({
	    redirectTo : '/jobs'
		});
}

angular.module ('app').config(Config);