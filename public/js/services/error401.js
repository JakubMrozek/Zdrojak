angular.module('zdrojak.service').factory('error401', ['$q', 'authNotifier', 'requestStorage', function($q, authNotifier, requestStorage){
  return function(promise)  {
    return promise.then(null, function(res){
      if (res.status !== 401) return promise;

      var deferred = $q.defer();
      var req = {
        config: res.config,
        deferred: deferred
      };
      requestStorage.add(req);
      authNotifier.notifyRequired();
      return deferred.promise;
    });
  };
}]);
