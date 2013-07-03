angular.module('zdrojak.controller').controller('OrderAddProductCtrl', ['$scope', 'api', function($scope, api){
  $scope.openAddDialog = function () {
    $scope.shouldBeOpen = true;
  };

  $scope.closeAddDialog = function () {
    $scope.shouldBeOpen = false;
    $scope.products = [];
    $scope.query = '';
  };

  $scope.addDialogOpts = {
    backdropFade: true,
    dialogFade: true
  };

  $scope.filterProducts = function() {
    $scope.products = api.product.index({query: $scope.query, limit: 20, offset: 0});
  };

  $scope.add = function(product, variant) {
    $scope.order.products.push({
      code: product.code,
      name: product.name,
      price: product.price,
      variant: {
        code: variant.code,
        name: variant.name
      },
      quantity: 1,
      vat: product.vat
    });
    $scope.update();
    $scope.closeAddDialog();
  };
}]);  