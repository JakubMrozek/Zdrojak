angular.module('zdrojak.directive').directive('login', ['$rootScope', 'authNotifier', function($rootScope, authNotifier){

  var config = {
    restrict: 'E',
    templateUrl: '/partials/admin/login.html',
    replace: true,
    scope: {},
    controller: 'LoginCtrl',
    link: function(scope, element) {

      var onRequired = function() {
        scope.mode = true;
      };

      var onConfirmed = function() {
        scope.mode = false;
      };

      if ($rootScope.authLoginRequired) {
        onRequired();
      }

      authNotifier.onRequired(scope, onRequired);
      authNotifier.onConfirmed(scope, onConfirmed);

    }
  };

  return config;
}]);
