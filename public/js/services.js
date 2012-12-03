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
  var phones = [{name: 'phone1'}, {name: 'phone2'}];
  $httpBackend.whenGET('/api/v1/pages').respond(phones);
  
  //nechat projit pozadavky na sablony
  $httpBackend.whenGET(/^\/partials\//).passThrough();
});