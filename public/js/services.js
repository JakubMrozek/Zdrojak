'use strict';

/* Services */

angular.module('zdrojakServices', ['ngResource'])
  .factory('api', function($resource) {
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
      index: {method:'GET', isArray: true},
      show: {method:'GET'}
    });
      
    //API objednavky
    api.order = $resource('/api/v1/orders', {}, {
      create: {method: 'POST'}
    });
      
    return api;
    
}).factory('basket', function(){
    
    var basket = new Basket(new BasketStorage());
    return basket;

}).factory('transport', function(){
    
    var transport = new Transport();
    return transport;

}).factory('basketStorage', function(){
    
    var storage = new BasketStorage();
    return storage;

});


/**  Mock http */
var mock = angular.module('zdrojakMock', ['ngMockE2E']);
mock.run(function($httpBackend) {
    
  apiary.forEach(function(section){
    var resources = section.resources;
    resources.forEach(function(res){
      var url = '/api/v1' + res.url;
      url = url.replace(/{[^}]+}/g, 'ZDROJAK_PARAM');
      //preg_quote pro javascript: http://stackoverflow.com/questions/6828637/escape-regexp-strings
      url = url.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + '' + '-]', 'g'), '\\$&');
      url = url.replace(/ZDROJAK_PARAM/g, '([^&]+)');
      url = new RegExp(url + '$');
      switch (res.method) {
        case 'GET':
          $httpBackend.whenGET(url).respond(res.responses[0].body);
          //console.log(url);
          break;
        case 'POST':
          $httpBackend.whenPOST(url).respond(res.responses[0].body);
          break;
        case 'PUT':
          $httpBackend.whenPUT(url).respond(res.responses[0].body);
          break;
        case 'DELETE':
          $httpBackend.whenDELETE(url).respond(res.responses[0].body);
          break;
      }    
    });      
  }); 
  
  //nechat projit pozadavky na sablony
  $httpBackend.whenGET(/^\/partials\//).passThrough();
});