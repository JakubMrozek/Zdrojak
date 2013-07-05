angular.module('zdrojak.controller').controller('SearchCtrl', ['$scope', '$routeParams', '$location', 'urlFilter', 'api', function ($scope, $routeParams, $location, urlFilter, api) {
  var query = {};
  var ps = urlFilter({limit: 10});

  $scope.query = $routeParams.query;
  $scope.limit = ps.getLimit();
  $scope.page  = ps.getPage();

  $scope.filter = function(offset) {
    $scope.load(offset);
    $location.search({offset: query.offset, limit: query.limit});
  };

  $scope.load = function(offset) {
    query.offset = offset || 0;
    query.limit  = $scope.limit;
    query.query  = $scope.query;
    $scope.results = api.product.index(query);
  };

  $scope.load(ps.getOffset());
}]);