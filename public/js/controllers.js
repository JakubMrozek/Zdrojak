'use strict';

/**
 * Vyhledavani
 * 
 */

function MenuSearchCtrl($scope, $location) {
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
 * Nakupni kosik v hornim menu.
 * 
 */

function MenuBasketCtrl($scope, basket) {
  $scope.price = basket.price();    
  basket.addListener(function(){
    $scope.price = basket.price();     
  });
}


/**
 * Seznam produktu na uvodni strance.
 * 
 */

function IndexCtrl($scope, api) {
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

function PageCtrl($scope, $routeParams, api) {
  $scope.page = api.page.show({url: $routeParams.page});
}


/**
 * Kategorie.
 * 
 */

function CategoryCtrl($scope, $routeParams, api) { 
  $scope.products = api.product.index({category: $routeParams.category});  
  $scope.category = api.category.show({url: $routeParams.category}); 
}


/**
 * Detail produktu.
 * 
 */

function ProductCtrl($scope, $routeParams, $location, api, basket) {
  $scope.addToBasket = function(variant){
    basket.add($scope.product.id, $scope.product.name, $scope.product.url, variant.name, $scope.product.price);  
    $location.path('/kosik');      
  }
  $scope.product = api.product.show({url: $routeParams.product});   
}


/**
 * Kosik.
 * 
 */

function BasketCtrl($scope, $location, basket) {
  $scope.updateQuantity = function(id, quantity) {
    basket.updateQuantity(id, quantity);   
  }
  $scope.remove = function(id) {
    basket.remove(id);  
    $scope._setBasketData();
  }
  $scope.next = function() {
    $location.path('/zakaznicke-udaje');      
  }
  
  $scope._setBasketData = function() {
    $scope.products = basket.products();  
    $scope.isBasketEmpty  = Object.keys($scope.products).length === 0;  
  }
  $scope._setBasketData();
}


/**
 * Udaje o zakaznikovi.
 * 
 */

function CustomerCtrl($scope, $location, basket) {
  $scope.customer  = basket.customer();
  $scope.transport = basket.transport() || 'personal';
  
  $scope.next = function() {
    basket.updateCustomer($scope.customer);
    basket.updateTransport($scope.transport);
    $location.path('/potvrzeni');      
  }
}


/**
 * Potvrzeni objednavky.
 * 
 */

function SummaryCtrl($scope, basket) {
  $scope.price = basket.price();
  $scope.products = basket.products(); 
}