angular.module('zdrojak.controller').controller('MenuAdminCtrl', ['$scope', 'auth', function($scope, auth){
  $scope.$on('$routeChangeSuccess', function ($event, current) {
    $scope.menuItem = current.menuItem;
  });

  $scope.logout = function() {
    auth.logout();
  };
}]);
