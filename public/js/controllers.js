'use strict';

/**
 * Vyhledavani
 * 
 */

function SearchFormCtrl($scope, $location) {
  $scope.search = function() {
    $location.path('/vyhledavani/' + $scope.query);    
  }
}


/**
 * Menu stranek.
 * 
 */

function MenuPagesCtrl($scope, api) {
  $scope.pages = api.page.index({fields: ['name', 'url']});
}


/**
 * Menu kategorii.
 * 
 */

function MenuCategoriesCtrl($scope, api) {
  $scope.categories = api.category.index();    
}


/**
 * Seznam produktu na uvodni strance.
 * 
 */

function IndexIndexCtrl($scope, api) {
  $scope.products = api.product.index({homepage: true});  
}


/**
 * Vyhledavani
 * 
 */

function SearchCtrl($scope, $routeParams, api) {
  $scope.query = $routeParams.query;
  $scope.products = api.product.index({query: $scope.query});  
}


/**
 * Detail stranky
 * 
 */

function PageCtrl($scope, api) {
  $scope.page = api.page.show({url: 'o-nas'});
}


/**
 * Kategorie.
 * 
 */

function CategoryCtrl($scope, api) {
  $scope.category = {
     name: 'iPhone'
  };   
  $scope.products = api.product.index({category: 'abc'});  
}


/**
 * Detail produktu.
 * 
 */

function ProductCtrl($scope, $location, api) {
  $scope.addToBasket = function(){
    $location.path('/kosik');      
  }
  $scope.product = api.product.show({url: 'abcd'});   
}


//TODO odstranit.
var basketTestData = [{
  name: 'iPhone 4 32GB černý',
  url: 'iphone-4-32gb-cerny',
  variant: 'Černá barva',
  count: 1,
  price: 15000
},
{
  name: 'iPhone 4 32GB bílý',
  url: 'iphone-4-32gb-bily',
  variant: 'Bílá barva',
  count: 2,
  price: 15000
}];


/**
 * Kosik.
 * 
 */

function BasketCtrl($scope, $location) {
  $scope.next = function() {
    $location.path('/zakaznicke-udaje');      
  }
  
  //TODO nacist z prohlizece
  $scope.products = basketTestData;  
}


/**
 * Udaje o zakaznikovi.
 * 
 */

function CustomerCtrl($scope, $location) {
  $scope.next = function() {
    $location.path('/potvrzeni');      
  }
}


/**
 * Potvrzeni objednavky.
 * 
 */

function SummaryCtrl($scope) {
  //TODO nacist z prohlizece
  $scope.price = 45000;
  $scope.products = basketTestData; 
}