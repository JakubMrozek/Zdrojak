'use strict';

/* Services */

angular.module('zdrojakServices', ['ngResource'])
  .factory('page', function($resource){
    return $resource('/api/v1/pages/:page', {}, {
      index: {method:'GET', isArray:true},
      show: {method:'GET'},
      create: {method:'POST'},
      update: {method:'PUT'},
      remove: {method:'DELETE'}
  });
});


/**  Mock http */
var mock = angular.module('zdrojakMock', ['ngMockE2E']);
mock.run(function($httpBackend) {
    
  var resources = apiary[0].resources;
  resources.forEach(function(res){
    var url = '/api/v1' + res.url.replace('{id}', 'test');
    switch (res.method) {
      case 'GET':
        $httpBackend.whenGET(url).respond(res.responses[0].body);
        console.log(url);
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
  
  //nechat projit pozadavky na sablony
  $httpBackend.whenGET(/^\/partials\//).passThrough();
});