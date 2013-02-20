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

module.controller('OrdersCtrl', ['$scope', 'status', 'form', 'api', function($scope, status, form, api) {
  var f = $scope.form = form($scope, {
    limit: 10,
    orderColumns: ['date', '-date'],
    filterColumns: ['status', 'date'],
    querySearch: true
  });
  f.init();
  
  $scope.filter = function(offset) {
    f.setOffset(offset);
    $scope.results = api.order.index(f.getApiData());
    f.updateUrl();  
  }; 
  
  $scope.results = api.order.index(f.getApiData());
  $scope.statusy = status.all();
}]);


/**
 * Detail jedne objednavky.
 * 
 */

module.controller('OrderDetailCtrl', ['$scope', '$routeParams', 'api', function($scope, $routeParams, api){
  $scope.order = api.order.show({number: $routeParams.number});
  $scope.update = function() {
    console.log('update');
  }
}]);


    
})();