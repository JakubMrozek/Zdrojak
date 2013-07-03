angular.module('zdrojak.controller').controller('ProductCtrl', ['$scope', '$routeParams', '$location', 'api', 'basket', function Product($scope, $routeParams, $location, api, basket) {
  $scope.addToBasket = function(variant){
    if (!basket.exist($scope.product.id, variant.name)) {
      basket.add({
        id: $scope.product.id,
        name: $scope.product.name,
        url: $scope.product.url,
        variant: variant.name,
        price: $scope.product.price,
        quantity: 1
      });
    }
    $location.path('/kosik');
  }
  $scope.product = api.product.show({url: $routeParams.product});
}]);