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
  $scope.price = basket.priceProducts();    
  basket.addListener(function(){
    $scope.price = basket.priceProducts();     
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
    if (!basket.exist($scope.product.id, variant.name)) {
      basket.add(
        $scope.product.id, 
        $scope.product.name, 
        $scope.product.url, 
        variant.name, 
        $scope.product.price
      );  
    }
    $location.path('/kosik');      
  }
  $scope.product = api.product.show({url: $routeParams.product});   
}


/**
 * Hlavicka kosiku.
 * 
 * 
 */
function BasketHeaderCtrl($scope, basket) {
  var setNextStep = function() {
    if (basket.hasCustomer()) {
      $scope.nextStep = 3;  
    } else if (basket.hasProducts()) {
      $scope.nextStep = 2;   
    } else {
      $scope.nextStep = 1;  
    }      
  }
  basket.addListener(setNextStep);
  setNextStep();
}


/**
 * Kosik.
 * 
 */

function BasketCtrl($scope, $location, basket) {
  $scope.step = 'basket';  
  
  var setBasketData = function() {
    $scope.products = basket.products();   
    $scope.price = basket.priceProducts();
    $scope.basketNotEmpty  = basket.hasProducts(); 
  }
    
  $scope.updateQuantity = function(quantity, id, variant) {
    basket.updateQuantity(quantity, id, variant);   
    setBasketData();
  }
  
  $scope.remove = function(id, variant) {
    basket.remove(id, variant); 
    setBasketData();
  }
  $scope.next = function() {
    $location.path('/zakaznicke-udaje');      
  }
  
  setBasketData();
}


/**
 * Udaje o zakaznikovi.
 * 
 * radio input v ng-repeat: https://github.com/angular/angular.js/issues/1100
 */

function CustomerCtrl($scope, $location, basket, transport) {
  $scope.step = 'customer';  
  
  if (!basket.hasProducts()) {
    $location.path('/kosik');    
    return;
  }
  
  $scope.customer  = basket.customer();
  $scope.transport = basket.transport() || {code: 'personal'};
  $scope.transportMethods = transport.methods();
  
  $scope.next = function() {
    basket.updateCustomer($scope.customer);
    basket.updateTransport(transport.get($scope.transport.code));
    $location.path('/potvrzeni');      
  }
}


/**
 * Potvrzeni objednavky.
 * 
 */

function SummaryCtrl($scope, $location, api, basket) {
  $scope.step = 'summary'; 
  
  if (!basket.hasCustomer() || !basket.hasProducts()) {
    $location.path('/kosik');    
    return;
  } 
  
  $scope.products  = basket.products(); 
  $scope.customer  = basket.customer();
  $scope.transport = basket.transport();
  $scope.price     = basket.priceTotal();
  
  $scope.next = function() {
    var data = {
      products: $scope.products,
      customer: $scope.customer,
      transport: $scope.transport
    };  
      
    api.order.create(data, function(info){
      $scope.number = info.number;    
      basket.clear();
    }); 
  }
}