angular.module('zdrojak.service').factory('authNotifier', ['$rootScope', function($rootScope){

  function AuthNotifier() {}

  AuthNotifier.prototype.onRequired = function(scope, cb) {
    scope.$on('auth:loginRequired', cb);
  };

  AuthNotifier.prototype.onConfirmed = function(scope, cb) {
    scope.$on('auth:loginConfirmed', cb);
  };

  AuthNotifier.prototype.notifyRequired = function() {
    $rootScope.$broadcast('auth:loginRequired');
  };

  AuthNotifier.prototype.notifyConfirmed = function() {
    $rootScope.$broadcast('auth:loginConfirmed');
  };

  return new AuthNotifier();

}]);
