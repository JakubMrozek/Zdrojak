angular.module('zdrojak.controller').controller('LoginCtrl', ['$scope', 'auth', 'flash', function($scope, auth, flash) {
  $scope.errors = false;
  var successCb = function() {
    $scope.errors = false;
    $scope.email = '';
    $scope.password = '';
  };

  var errorCb = function() {
    $scope.errors = true;
  };

  $scope.login = function() {
    $scope.errors = false;
    auth.login($scope.email, $scope.password, successCb, errorCb);
  };
}]);
