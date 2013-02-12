'use strict';

/* Aplikace */

(function() {    
    
var module = angular.module('zdrojak.admin', [
  'zdrojak.admin.controller',
  'zdrojak.filter', 
  'zdrojak.directive', 
  'zdrojak.service', 
  'zdrojak.mock'
]);


/**
 * Definice vsech pravidel pro URL.
 * 
 */

module.config(function routes($routeProvider) {
  $routeProvider.when('/admin', {templateUrl: '/partials/admin/orders.html', controller: 'OrdersCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});    
});


/**
 * Nastaveni formatu URL.
 * 
 * Pro moderni prohlizece se pouzije HTML5 History API a URL 
 * budou mit standardni format. 
 * Napr. example.com/mobily/android.
 * 
 * Pokud uzivatel bude pouzivat aplikaci ve starsim prohlizeci,
 * URL pro konkretni stranky se budou davat za hash.
 * Napr. example.com/#/mobily/android  
 */

module.config(function url($locationProvider) {
  $locationProvider.html5Mode(true);   
});

    
})();