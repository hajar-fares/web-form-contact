function JobsController($scope, jobs){
    $scope.jobs = jobs;

}

angular.module('app').controller('JobsCtrl', JobsController);