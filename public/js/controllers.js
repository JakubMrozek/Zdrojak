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

function MenuPagesCtrl($scope) {
  $scope.pages = [
    {'name': 'O nás', 'url': 'o-nas'},
    {'name': 'Obchodní podmínky', 'url': 'obchodni-podminky'},
    {'name': 'FAQ', 'url': 'faq'},
    {'name': 'Kontakt', 'url': 'kontakt'}
  ];  
}


/**
 * Menu kategorii.
 * 
 */

function MenuCategoriesCtrl($scope) {
  $scope.pages = [
    {'name': 'Android', 'url': 'android'},
    {'name': 'iPhone', 'url': 'iphone'},
    {'name': 'BlackBerry', 'url': 'blackberry'},
    {'name': 'Symbian', 'url': 'symbian'},
    {'name': 'Windows Phone', 'url': 'windows-phone'},
    {'name': 'Levné', 'url': 'levne'},
    {'name': 'Příslušenství', 'url': 'prislusenstvi', 'children': [
      {'name': 'Baterie', 'url': 'baterie'},
      {'name': 'Držáky', 'url': 'drzaky'},
      {'name': 'Nabíječky', 'url': 'nabijecky'},
      {'name': 'Pouzdra', 'url': 'pouzdra'}
    ]}
  ];  
}


/**
 * Seznam produktu na uvodni strance.
 * 
 */

function IndexIndexCtrl($scope) {
  $scope.products = [
    {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   },
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   },   
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   },  
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   },   
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   }, 
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   }, 
  ]; 
}


/**
 * Vyhledavani
 * 
 */

function SearchCtrl($scope, $routeParams) {
  $scope.query = $routeParams.query;
  $scope.products = [
    {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   },
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   }
  ];   
}


/**
 * Detail stranky
 * 
 */

function PageCtrl($scope) {
  $scope.page = {
     name: 'O nás',
     text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  };   
}


/**
 * Kategorie.
 * 
 */

function CategoryCtrl($scope) {
  $scope.category = {
     name: 'iPhone'
  };   
  $scope.products = [
    {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   },
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   },   
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   },  
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   },   
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   }, 
   {
     name: 'iPhone 4 32GB černý',
     url: 'iphone-4-32gb-cerny',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
     photo: '/img/350x300.gif',
     producer: 'Apple',
     availability: 'skladem',
     price: 15000
   }, 
  ]; 
}


/**
 * Detail produktu.
 * 
 */

function ProductCtrl($scope, $location) {
  $scope.addToBasket = function(){
    $location.path('/kosik');      
  }
    
  $scope.product = {
     name: 'iPhone 4 32GB',
     url: 'iphone-4-32gb',
     code: 'AZ007',
     perex: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',     
     text: '<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p><p>Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>',
     photos: [
       {src: '/img/350x300.gif'},
       {src: '/img/350x300.gif'},
     ],
     parameters: [
       {name: 'Operační systém', values: ['iOS']},
       {name: 'Barva', values: ['černá', 'bílá']},
       {name: 'Digitální fotoaparát', values: ['ano']},
       {name: 'Rozličení fotoaparátu', values: ['8 Mpx']},
       {name: 'Pohotovostní doba', values: ['225 hodin']},
       {name: 'MP3', values: ['ano']},
       {name: 'FM rádio', values: ['ne']},
       {name: 'HD video', values: ['ano']},
       {name: 'Rozměry', values: ['115,2 x 58,6 x 9,3 mm']},
       {name: 'Hmotnost', values: ['137 g']},
     ],
     variants: [
       {name: 'Černá barva'},
       {name: 'Bílá barva'}
     ],
     producer: 'Apple',
     availability: 'skladem',
     price: 15000,
     dph: 20
  };   
}


/**
 * Kosik.
 * 
 */

function BasketCtrl($scope, $location) {
  $scope.next = function() {
    $location.path('/zakaznicke-udaje');      
  }
  $scope.products = [
    {
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
    },
  ];  
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
  $scope.price = 45000;
  $scope.products = [
    {
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
    },
  ]; 
}













//seznam vsech stranek
function PagesIndexCtrl($scope, page) {
  $scope.pages = page.index();
}


//vytvoreni stranky
function PagesNewCtrl($scope, $location, page) {
  $scope.page = {};
  $scope.create = function() {
    page.create($scope.page, function(){
      $location.path('/pages');
    });
  }
}


//detail stranky
function PagesShowCtrl($scope, $routeParams, $location, page) {
  $scope.page = page.show({page: $routeParams.page});
  
  //editace stranky
  $scope.update = function() {
    page.update({page: $routeParams.page}, $scope.page);  
  }
  
  //smazani stranky
  $scope.remove = function() {
    page.remove({page: $routeParams.page}, function(){
      $location.path('/pages');
    });
  }
}
