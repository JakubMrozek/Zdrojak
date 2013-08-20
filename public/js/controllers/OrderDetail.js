angular.module('zdrojak.controller').controller('OrderDetailCtrl', ['$scope', '$routeParams', 'status', 'price', 'transport', 'api', function($scope, $routeParams, status, price, transport, api){
  $scope.order = api.order.show({number: $routeParams.number});

  $scope.options = {};
  var methods = transport.methods();
  for (var method in methods) {
    $scope.options[methods[method].code] = methods[method].name;
  }

  $scope.update = function(inline, success, error) {
    $scope.order.transport = transport.get($scope.order.transport.code);
    $scope.order.price = price.total($scope.order.products, $scope.order.transport.price);
    api.order.update({number: $scope.order.number}, $scope.order, success || null, error || null);
  };

  $scope.remove = function(index) {
    $scope.order.products.splice(index, 1);
    $scope.update();
  };

  $scope.st = status;
}]);