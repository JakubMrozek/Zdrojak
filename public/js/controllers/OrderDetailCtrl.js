angular.module('zdrojak.controller').controller('OrderDetailCtrl', ['$scope', '$routeParams', 'status', 'price', 'api', function($scope, $routeParams, status, price, api){
  $scope.order = api.order.show({number: $routeParams.number});

  $scope.update = function() {
    $scope.order.price = price.total($scope.order.products, $scope.order.transport.price);
    api.order.update({number: $scope.order.number}, $scope.order);
  };

  $scope.remove = function(index) {
    $scope.order.products.splice(index, 1);
    $scope.update();
  };

  $scope.st = status;
}]);