angular.module('zdrojak.controller').controller('IndexCtrl', ['$scope', 'api', function($scope, api) {
  $scope.products = api.product.homepage({homepage: true});
}]);