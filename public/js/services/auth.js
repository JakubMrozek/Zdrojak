angular.module('zdrojak.service').factory('auth', ['$http', '$window', 'authNotifier', 'requestStorage', 'api', function($http, $window, authNotifier, requestStorage, api){
  return new Auth($http, $window.sessionStorage, requestStorage, authNotifier, api);
}]);
