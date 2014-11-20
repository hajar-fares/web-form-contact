function   JobController($scope, job){
    $scope.job = job;
    
    $scope.doApply = function (){
	
	var apply = new Apply($scope.apply);
	apply.job = job._id;
	
	var promise = apply.$save()
	promise.then(function(){
		$scope.applied = true;
		$scope.apply = {};
	    });
    }
    
}

angular.module('app').controller('JobDetailCtrl', JobController);
