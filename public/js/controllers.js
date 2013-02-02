'use strict';

/**
 * App Controller
 * 
 */

function AppCtrl($scope, basket) {
  $scope.basket = basket;
}


/**
 * Vyhledavani
 * 
 */

function MenuSearchCtrl($scope, $location) {
  $scope.search = function() {
    $location.url('/vyhledavani/' + $scope.query);    
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

function CategoryCtrl($scope, $routeParams, $location, psearch, api) { 
  var search = $location.search();
  var query = {category: $routeParams.category};
  
  $scope.category = api.category.show({url: $routeParams.category}, function(){
    var urlParams = psearch.getParamsFromUrl(search.filter);
    $scope.category.params.forEach(function(param){
      if (!Array.isArray(urlParams[param.code])) return;
      param.values.forEach(function(value){
        if(~urlParams[param.code].indexOf(value.code)) value.checked = true;   
      });
    });
    $scope.price = psearch.getPriceFromUrl(urlParams, $scope.category.maxPrice);
    $scope.sort  = psearch.getSortFromUrl(search, 'price');
    
    if (search.offset) {
      var offset = search.offset;
      $scope.current = ((offset - 1) / 10) + 1;
      $scope.load(offset, 10);    
    } else {
      $scope.load();    
    }
    
  });  
  
  /**
   * @param {Number} offset
   * @param {Number} limit
   */
  $scope.load = function(offset, limit) {
    var values = psearch.getValues($scope.category.params);
    values.push('price:' + $scope.price);
    
    query.filter = values.join('@');
    query.sort = $scope.sort;
    query.offset = offset || 1; 
    query.limit = limit || 10;    
    
    $scope.results = api.product.index(query, function(){
      if (!limit) $scope.current = 1;    
    }); 
  }
 
  /**
   * @param {Number} offset
   * @param {Number} limit
   */
  $scope.filter = function(offset, limit) {
    $scope.load(offset, limit);
    $location.search('filter', query.filter)
             .search('sort', query.sort)
             .search('offset', query.offset)
             .search('limit', query.limit);     
  }; 
}


/**
 * Detail produktu.
 * 
 */

function ProductCtrl($scope, $routeParams, $location, api, basket) {
  $scope.addToBasket = function(variant){
    if (!basket.exist($scope.product.id, variant.name)) {
      basket.add({
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

function BasketCtrl($scope, $location, basket) {
  $scope.step = 'basket';  
  $scope.products = basket.getAll();
  $scope.next = function() {
    $location.path('/zakaznicke-udaje');      
  };
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
  
  $scope.customer  = basket.getCustomer();
  $scope.transport = basket.getTransport() || {code: 'personal'};
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
  
  $scope.products   = basket.getAll(); 
  $scope.customer   = basket.getCustomer();
  $scope.transport  = basket.getTransport();
  $scope.priceTotal = basket.priceTotal();
  
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