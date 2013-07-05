angular.module('zdrojak.controller').controller('ProductsCtrl', ['$scope', 'formFilter', 'availability', 'api', function($scope, formFilter, availability, api) {
  var filter = $scope.form = formFilter($scope, {
    limit: 10,
    orderColumns: ['date', '-date'],
    filterColumns: ['status', 'availability', 'homepage'],
    querySearch: true
  });

  $scope.filter = function(offset) {
    filter.setOffset(offset);
    $scope.results = api.product.index(filter.getApiData());
    filter.updateUrl();
  };

  $scope.results = api.product.index(filter.getApiData());
  $scope.av = availability;
}]);