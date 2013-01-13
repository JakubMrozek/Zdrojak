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
  $routeProvider.when('/vyhledavani/:query', {templateUrl: '/partials/search/index.html', controller: SearchCtrl});
  $routeProvider.when('/info/:page', {templateUrl: '/partials/page/index.html', controller: PageCtrl});
  $routeProvider.when('/mobily/:category', {templateUrl: '/partials/category/index.html', controller: CategoryCtrl});
  $routeProvider.when('/mobil/:product', {templateUrl: '/partials/product/index.html', controller: ProductCtrl});
  $routeProvider.when('/kosik', {templateUrl: '/partials/basket/index.html', controller: BasketCtrl});
  $routeProvider.otherwise({redirectTo: '/'});
});
    
zdrojak.config(function($locationProvider) {
  $locationProvider.html5Mode(true)
});