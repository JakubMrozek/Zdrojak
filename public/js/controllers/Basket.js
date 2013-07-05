angular.module('zdrojak.controller').controller('BasketCtrl', ['$scope', '$location', 'basket', function ($scope, $location, basket) {
  $scope.step = 'basket';
  $scope.products = basket.getAll();
  $scope.next = function() {
    $location.path('/zakaznicke-udaje');
  };
}]);