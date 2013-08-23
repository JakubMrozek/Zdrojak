angular.module('zdrojak.controller').controller('ProductAddCtrl', ['$scope', '$location', 'api', function ($scope, $location, api) {
  
  $scope.add = function() {
    api.product.create($scope.data, function(req) {
      $location.url('/admin/products/' + req.id);
    });
  };

}]);