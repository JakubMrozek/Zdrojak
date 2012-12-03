'use strict';

//aplikace byla spustena pro testy?
var scenario = parent.scenario || false;
var services;
if (scenario) {
  services = ['zdrojakMock', 'zdrojakServices'];
} else {
  services = ['zdrojakServices'];
}

var zdrojak = angular.module('zdrojak', services); 

zdrojak.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: '/partials/index/index.html', controller: IndexIndexCtrl});
  $routeProvider.when('/pages', {templateUrl: '/partials/pages/index.html', controller: PagesIndexCtrl});
  $routeProvider.when('/pages/new/page', {templateUrl: '/partials/pages/new.html', controller: PagesNewCtrl});
  $routeProvider.when('/pages/:page', {templateUrl: '/partials/pages/show.html', controller: PagesShowCtrl});
  $routeProvider.otherwise({redirectTo: '/'});
});
    
zdrojak.config(function($locationProvider) {
  $locationProvider.html5Mode(true)
});