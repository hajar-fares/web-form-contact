function JobFactory($resource){
    return $resource ('/api/jobs/:jobId', {jobId : '@_id'});
}

angular.module('app').factory('Job', JobFactory);
