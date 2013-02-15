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
  api.order = $resource('/api/v1/orders', {}, {
    index: {method:'GET'},
    create: {method: 'POST'}
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

module.factory('parametricSearch', ['$location', function($location){
  return function(config) {
    var search = new ParametricSearch(config);   
    search.setParams($location.search());  
    return search;
  }
}]);
    
})();


