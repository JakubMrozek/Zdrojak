angular.module('zdrojak.controller').controller('SummaryCtrl', ['$scope', '$location', 'api', 'basket', function ($scope, $location, api, basket) {
  $scope.step = 'summary';
  if (!basket.hasCustomer() || !basket.hasProducts()) {
    $location.path('/kosik');
    return;
  }

  $scope.products   = basket.getAll();
  $scope.customer   = basket.getCustomer();
  $scope.transport  = basket.getTransport();
  $scope.priceTotal = basket.priceTotal();

  $scope.next = function() {
    var data = {
      products: $scope.products,
      customer: $scope.customer,
      transport: $scope.transport
    };

    api.order.create(data, function(info){
      $scope.number = info.number;
      basket.clear();
    });
  }
}]);