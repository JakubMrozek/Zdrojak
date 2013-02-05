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
    index: {method:'GET'},
    homepage: {method:'GET', isArray:true},
    show: {method:'GET'}
  });
      
  //API objednavky
  api.order = $resource('/api/v1/orders', {}, {
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
 * Zpracovani parametru z URL u strankovani/filtrovani
 * 
 * 
 */
module.factory('psearch', function(){
  var obj = {};
  
  
  /**
   * Vraci aktualni cislo stranky.
   * 
   * @param {Object} search
   * @param {Number} limit
   * @return {Number}
   */
  
  obj.getCurrentFromUrl = function(search, limit) {
    if (typeof offset === 'undefined') return 1;
    var current = (search.offset / limit) + 1;    
    if (current < 1) return 1;
    if (search.offset % limit !== 0) return 1;
    return current;
  };
  
  
  /**
   * Vraci informaci, od ktereho zaznamu budou vraceny zaznamy.
   * 
   * @param {Object} search
   * @param {Number} limit
   * @return {Number}
   */
  
  obj.getOffsetFromUrl =  function(search, limit) {
    if (this.getCurrentFromUrl(search.offset, limit) === 1) {
      return 0;    
    } else {
      return search.offset;    
    }
  };
  
  
  /**
   * Vraci nazev pole, podle ktereho se bude strankovat.
   * 
   * @param {Object} search
   * @param {String} def
   * @return {String}
   */
  
  obj.getSortFromUrl =  function(search, def) {
    if (search.sort === 'price' || search.sort === '-price') {
      return search.sort;
    } 
    return def;  
  };
  
  
  /**
   * Vraci cenu uvedenou v URL.
   * 
   * @param {Object} search
   * @param {String} def
   * @return {String}
   */
  
  obj.getPriceFromUrl = function(search, def) {
    if (search.price) {
      return search.price.toString();
    } 
    return def;  
  };
  
  
  /**
   * Rozparsuje URL na parametry.
   * 
   * @param {String} url
   * @return {Object}
   */
  
  obj.getParamsFromUrl = function(url) {
    var params = {};
    if (!url) return params;
    url.split('@').forEach(function(rule){
      var parts = rule.split(':');
      params[parts[0]] = parts[1].split(',');
    });
    return params;   
  };
  
  
  /**
   * @param {Object} params
   * @return {Array}
   */
  
  obj.getValues = function(params) {
    var values = [];
    params.forEach(function(param){
      var vals = [];
      param.values.forEach(function(value){
        if (value.checked) vals.push(value.code);
      });   
      if (vals.length > 0){
        values.push(param.code + ':' + vals.join(','));      
      }
    });
    return values;    
  }
  
  return obj;
});

    
})();





