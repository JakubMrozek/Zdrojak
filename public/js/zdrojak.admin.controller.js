'use strict';

(function() {  

var module = angular.module('zdrojak.admin.controller', []);

/**
 * App Controller
 * 
 */

module.controller('AppCtrl', ['$scope', function($scope){
      
}]);


/**
 * Seznam objednavek.
 * 
 */

module.controller('OrdersCtrl', ['$scope', 'status', 'formFilter', 'api', function($scope, status, formFilter, api) {
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


/**
 * Detail jedne objednavky.
 * 
 */

module.controller('OrderDetailCtrl', ['$scope', '$routeParams', 'status', 'price', 'api', function($scope, $routeParams, status, price, api){
  $scope.order = api.order.show({number: $routeParams.number});
  
  $scope.update = function() {
    $scope.order.price = price.total($scope.order.products, $scope.order.transport.price);
    api.order.update({number: $scope.order.number}, $scope.order);
  };
  
  $scope.remove = function(index) {
    $scope.order.products.splice(index, 1);
    $scope.update();
  };
  
  $scope.st = status;  
}]);


    
})();