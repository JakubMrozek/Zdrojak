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

module.controller('OrdersCtrl', ['$scope', '$location', 'parametricSearch', 'status', 'api', function($scope, $location, parametricSearch, status, api) {
  var query = {};
  var ps = parametricSearch({limit: 10, orderColumns: ['date', '-date']});
  
  $scope.limit  = ps.getLimit();
  $scope.page   = ps.getPage();
  $scope.query  = ps.getParam('query');
  $scope.date   = ps.getFilterParamAsString('date');
  $scope.status = ps.getFilterParamAsString('status');
  
  $scope.filter = function(offset, reset) {
    reset = angular.isDefined(reset) ? reset : true;
    $scope.load(offset);
    $location.search({
      offset: query.offset, 
      limit: query.limit,
      filter: query.filter,
      query: query.query,
      order: query.order
    });    
  }; 
  
  $scope.load = function(offset, reset) {
    query.offset = offset || 0;  
    query.query  = $scope.query || '';
    query.limit  = $scope.limit;
    query.filter = $scope.serialize();
    query.order  = ps.getOrder();
    $scope.results = api.order.index(query, function(){
      if (reset) $scope.page = 1;
    }); 
  };
  
  $scope.serialize = function() {
    var values = [];
    if ($scope.status) values.push('status:' + $scope.status);
    if ($scope.date) values.push('date:' + $scope.date);
    return values.join('@'); 
  };
  
  $scope.load(ps.getOffset());   
  $scope.statusy = status.all();
}]);

    
})();