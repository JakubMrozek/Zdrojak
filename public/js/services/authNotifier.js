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
    $rootScope.authLoginRequired = true;
  };

  AuthNotifier.prototype.notifyConfirmed = function() {
    $rootScope.$broadcast('auth:loginConfirmed');
    $rootScope.authLoginRequired = false;
  };

  return new AuthNotifier();

}]);
