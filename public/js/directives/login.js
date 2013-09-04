angular.module('zdrojak.directive').directive('login', ['authNotifier', function(authNotifier){

  var config = {
    restrict: 'E',
    templateUrl: '/partials/admin/login.html',
    replace: true,
    scope: {},
    controller: 'LoginCtrl',
    link: function(scope, element) {

      authNotifier.onRequired(scope, function(){
        scope.mode = true;
      });

      authNotifier.onConfirmed(scope, function(){
        scope.mode = false;
      });

    }
  };

  return config;
}]);
