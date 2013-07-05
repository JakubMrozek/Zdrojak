angular.module('zdrojak.controller').controller('CustomerCtrl', ['$scope', '$location', 'basket', 'transport', function ($scope, $location, basket, transport) {
  $scope.step = 'customer';
  if (!basket.hasProducts()) {
    $location.path('/kosik');
    return;
  }

  $scope.customer  = basket.getCustomer();
  $scope.transport = basket.getTransport() || {code: 'personal'};
  $scope.transportMethods = transport.methods();

  $scope.next = function() {
    basket.updateCustomer($scope.customer);
    basket.updateTransport(transport.get($scope.transport.code));
    $location.path('/potvrzeni');
  }
}]);