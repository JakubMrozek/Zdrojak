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