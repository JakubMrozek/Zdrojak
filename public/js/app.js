'use strict';

//aplikace byla spustena pro testy?
var zdrojak = angular.module('zdrojak', ['zdrojakMock', 'zdrojakServices']); 

zdrojak.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: '/partials/index.html', controller: IndexCtrl});
  $routeProvider.when('/vyhledavani/:query', {templateUrl: '/partials/search.html', controller: SearchCtrl});
  $routeProvider.when('/info/:page', {templateUrl: '/partials/page.html', controller: PageCtrl});
  $routeProvider.when('/mobily/:category', {templateUrl: '/partials/category.html', controller: CategoryCtrl, reloadOnSearch: false});
  $routeProvider.when('/mobil/:product', {templateUrl: '/partials/product.html', controller: ProductCtrl});
  $routeProvider.when('/kosik', {templateUrl: '/partials/basket.html', controller: BasketCtrl});
  $routeProvider.when('/zakaznicke-udaje', {templateUrl: '/partials/customer.html', controller: CustomerCtrl});
  $routeProvider.when('/potvrzeni', {templateUrl: '/partials/summary.html', controller: SummaryCtrl});
  $routeProvider.otherwise({redirectTo: '/'});
});
    
zdrojak.config(function($locationProvider) {
  $locationProvider.html5Mode(true)
});