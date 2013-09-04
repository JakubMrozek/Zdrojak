angular.module('zdrojak.controller').controller('LoginCtrl', ['$scope', 'auth', 'flash', function($scope, auth, flash) {
  $scope.login = function() {
    auth.login($scope.email, $scope.password, null, function(){
      //oznamit uzivateli chybu...
    });
  };
}]);
