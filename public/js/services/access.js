angular.module('zdrojak.service').factory('access', ['$window', 'auth', 'authNotifier', function($window, auth, authNotifier){
  var isLoggedIn = !!auth.getToken();
  if (!isLoggedIn) {
    authNotifier.notifyRequired();
  }
}]);
