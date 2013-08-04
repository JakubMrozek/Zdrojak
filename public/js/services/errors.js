angular.module('zdrojak.service').factory('errors', ['$q', 'flash', function($q, flash){
  var errorCb = function(res) {
    var errors = res.data.errors || [];
    flash.error(errors);
  };
  return function(promise) {
    promise.then(null, errorCb);
    return promise;
  }
}]);