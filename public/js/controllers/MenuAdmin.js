angular.module('zdrojak.controller').controller('MenuAdminCtrl', ['$scope', function($scope){
  $scope.$on('$routeChangeSuccess', function ($event, current) {
    $scope.menuItem = current.menuItem;
  });
}]);