angular.module('zdrojak.controller').controller('OrdersCtrl', ['$scope', 'status', 'formFilter', 'api', function($scope, status, formFilter, api) {
  var filter = $scope.form = formFilter($scope, {
    limit: 10,
    orderColumns: ['date', '-date'],
    filterColumns: ['status', 'date'],
    querySearch: true
  });

  $scope.filter = function(offset) {
    filter.setOffset(offset);
    $scope.results = api.order.index(filter.getApiData());
    filter.updateUrl();
  };

  $scope.updateStatus = function(index) {
    var order = $scope.results.orders[index];
    api.order.updateStatus({number: order.number}, order);
  };

  $scope.results = api.order.index(filter.getApiData());
  $scope.st = status;

}]);