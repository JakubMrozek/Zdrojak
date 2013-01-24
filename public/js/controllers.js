'use strict';

/**
 * App Controller
 * 
 */

function AppCtrl($scope, storage) {
  $scope.storage = storage;
  console.log('zavolano');
}


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

function ProductCtrl($scope, $routeParams, $location, api, storage) {
  $scope.addToBasket = function(variant){
    if (!storage.exist($scope.product.id, variant.name)) {
      storage.add({
        id: $scope.product.id, 
        name: $scope.product.name, 
        url: $scope.product.url, 
        variant: variant.name, 
        price: $scope.product.price,
        quantity: 1
      });  
    }
    $location.path('/kosik');      
  }
  $scope.product = api.product.show({url: $routeParams.product});   
}


/**
 * Kosik.
 * 
 */

function BasketCtrl($scope, $location, storage) {
  $scope.step = 'basket';  
  $scope.products = storage.getAll();
  $scope.next = function() {
    $location.path('/zakaznicke-udaje');      
  };
}


/**
 * Udaje o zakaznikovi.
 * 
 * radio input v ng-repeat: https://github.com/angular/angular.js/issues/1100
 */

function CustomerCtrl($scope, $location, storage, transport) {
  if (!storage.hasProducts()) {
    $location.path('/kosik');    
    return;
  }
  
  $scope.step = 'customer';  
  $scope.storage = storage;
  
  $scope.customer  = storage.getCustomer();
  $scope.transport = storage.getTransport() || {code: 'personal'};
  $scope.transportMethods = transport.methods();
  
  $scope.next = function() {
    storage.updateCustomer($scope.customer);
    storage.updateTransport(transport.get($scope.transport.code));
    $location.path('/potvrzeni');      
  }
}


/**
 * Potvrzeni objednavky.
 * 
 */

function SummaryCtrl($scope, $location, api, storage) {
  if (!storage.hasCustomer() || !storage.hasProducts()) {
    $location.path('/kosik');    
    return;
  } 
  
  $scope.step = 'summary'; 
  $scope.storage = storage;
  
  $scope.products  = storage.getAll(); 
  $scope.customer  = storage.getCustomer();
  $scope.transport = storage.getTransport();
  $scope.price     = storage.priceTotal();
  
  $scope.next = function() {
    var data = {
      products: $scope.products,
      customer: $scope.customer,
      transport: $scope.transport
    };  
      
    api.order.create(data, function(info){
      $scope.number = info.number;    
      storage.clear();
    }); 
  }
}