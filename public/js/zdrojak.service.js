'use strict';

/* Sluzby (servisni objekty) */

(function() {
    
var module = angular.module('zdrojak.service', ['ngResource']);


/**
 * Definice API.
 */

module.factory('api', ['$resource', function($resource) {
  var api = {};
    
  //API stranek
  api.page = $resource('/api/v1/pages/:page', {}, {
    index: {method:'GET', isArray:true},
    show: {method:'GET'}
  });
    
  //API kategorie
  api.category = $resource('/api/v1/categories', {}, {
    index: {method:'GET', isArray:true},
    show: {method:'GET'}
  });
    
  //API produkty
  api.product = $resource('/api/v1/products', {}, {
    homepage: {method:'GET', isArray:true},
    index: {method:'GET'},
    show: {method:'GET'}
  });
      
  //API objednavky
  api.order = $resource('/api/v1/orders/:number', {}, {
    index: {method:'GET'},
    create: {method: 'POST'},
    show: {method: 'GET'}
  });
      
  return api;
}]);


/**
 * Doprava.
 * 
 */
module.factory('transport', function(){
  return new Transport();
});


/**
 * Stavy objednavky.
 * 
 */
module.factory('status', function(){
  return new Status();
});


/**
 * Nakupni kosik.
 * 
 */

module.factory('basket', ['$window', '$rootScope', function($window, $rootScope){
  var basket = new Basket($window, function(){
    $rootScope.$apply();
  });
  return basket;
}]);


/**
 * Parametricke vyhledavani
 * 
 */

module.factory('filter', ['$location', function($location){
  return function(config) {
    var search = new Filter(config);   
    search.setParams($location.search());  
    return search;
  }
}]);


/**
 * Parametricke vyhledavani
 * 
 */

module.factory('form', ['$location', 'filter', function($location, filter){  
  
function Form($scope, config, filter) {
  this._$scope = $scope;
  this._filter = filter;
  this._limit = config.limit || 10;
  this._orderColumns  = config.orderColumns || [];
  this._filterColumns = config.filterColumns || [];
  this._querySearch  = config.querySearch || false;
  this._offset = this.filter().getOffset();
}

Form.prototype.serialize = function() {
  var values = [];
  for (var i = 0; i < this._filterColumns.length; ++i) {
    if (this._$scope[this._filterColumns[i]]) {
      values.push(this._filterColumns[i] + ':' + this._$scope[this._filterColumns[i]]);   
    }  
  }
  return values.join('@');  
};

Form.prototype.updateUrl = function() {
  var query = this.getApiData();
  $location.search({
    offset: query.offset, 
    limit: query.limit,
    filter: query.filter,
    query: query.query,
    order: query.order
  });    
};

Form.prototype.init = function() {
  this._$scope.limit  = this._filter.getLimit();
  this._$scope.page   = this._filter.getPage();
  if (this._querySearch) {
    this._$scope.query  = this._filter.getParam('query');  
  }
  for (var i = 0; i < this._filterColumns.length; ++i) {
    this._$scope[this._filterColumns[i]] = this._filter.getFilterParamAsString(this._filterColumns[i], '');   
  }
};

Form.prototype.getApiData = function() {
  var query = {};
  query.offset = this.getOffset();  
  query.query  = this._$scope.query || '';
  query.limit  = this._$scope.limit;
  query.filter = this._$scope.form.serialize();
  query.order  = this._$scope.form.filter().getOrder();
  return query;
};

Form.prototype.getOffset = function() {
  return this._offset || 0;  
};

Form.prototype.setOffset = function(offset) {
  this._offset = offset;  
};

Form.prototype.filter = function() {
  return this._filter;
};

return function($scope, config) {
  return new Form($scope, config, filter(config));
}

}]);

    
})();


