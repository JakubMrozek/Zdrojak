'use strict';

/* Services */

angular.module('zdrojakServices', ['ngResource'])
    .factory('Page', function($resource){
        return $resource('/api/pages/:page', {}, {
            index: {method:'GET', isArray:true},
            show: {method:'GET'},
            create: {method:'POST'},
            update: {method:'PUT'},
            remove: {method:'DELETE'}
    });
});