angular.module('zdrojak.controller').controller('AppCtrl', ['$scope', 'basket', function($scope, basket){
  $scope.basket = basket;
}]);
