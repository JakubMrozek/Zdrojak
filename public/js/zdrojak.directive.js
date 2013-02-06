'use strict';

/* Direktivy */

(function() {
    
var module = angular.module('zdrojak.directive', []);

/**
 * Direktiva zobrazi HTML5 element input typu range.
 * 
 * Pouziti v sablone:
 *   <range change="filter" min="{{minPrice}}" max="{{maxPrice}}" step="500" model="price"></range>
 *   
 * Parametry scope:
 *   max - maximalni hodnota slideru (HTML atribut max)
 *   min - minimalni hodnota slideru (HTML atribut min)
 *   model - aktualni hodnota slideru
 *   change - funkce, ktera bude zavolana pri zmene hodnoty slideru
 *   
 * V direktive se pouziva funkce setTimeout(), protoze HTML udalost change
 * se vola pri kazdem posunuti o jeden krok (step), pokud tedy 
 * uzivatel posune slider treba o 20 kroku, zavola se funkce 20x,
 * coz by treba znamenalo 20 pozadavku na server. Nyni funkce pocka 200ms 
 * od posledniho posunu a pak je udalost zavolana.
 */

module.directive('range', function range(){
  var config = {
    restrict: 'E',
    replace: true,
    scope: {
      max: '@',
      min: '@',
      model: '=',
      change: '='
    },
    template: '<input type="range" ng-model="model">',
    link: function(scope, element) {
      var timer;
      element.bind('change', function(){
        if (timer) clearInterval(timer);
        timer = setTimeout(scope.change, 200);
      });   
    }
  }
  return config;
});


/**
 * Direktiva zobrazi strankovani.
 * 
 * Pouziti v sablone:
 *   <pagination page="page" count="count" limit="limit" move="filter"></pagination>
 *   
 * Parametry scope:
 *   count - celkovy pocet vysledku
 *   limit - maximalni pocet vysledku na stranku
 *   page - aktualni cislo stranky (nejnizsi je 1)
 *   move - funkce, ktera bude zavolana pri prechodu na dalsi stranku  
 */

module.directive('pagination', function pagination() {
  var template = 
    '<ul class="pager" ng-show="count > limit">' +
    '<li class="previous"><a>&larr; Předchozí</a></li>' + 
    '<li>Stránka: {{page}}/{{countPages}}</li>' + 
    '<li class="next"><a>Další &rarr;</a></li>' +
    '</ul>';

  function move(scope) {
    var offset = (scope.page - 1) * scope.limit;
    scope.move(offset, false);
    scope.$apply();
  }
  
  function disable(scope, el, page) {
    if (scope.page === page) {
      el.addClass('disabled');  
    }      
  }  
  
  function prev(scope, prevEl, nextEl) {
    if (scope.page <= 1) return; 
    if (scope.page > 1) {
      nextEl.removeClass('disabled');
      scope.page -= 1;    
    }
    disable(scope, prevEl, 1);
    move(scope); 
  }
  
  function next(scope, prevEl, nextEl) {
    if (scope.page >= scope.countPages) return;
    if (scope.page < scope.countPages) {
      prevEl.removeClass('disabled');
      scope.page += 1;    
    }
    disable(scope, nextEl, scope.countPages);
    move(scope);      
  }

  var config = {
    restrict: 'E',
    replace: true,
    scope: {
      count: '=',
      limit: '=',
      page: '=',
      move: '='
    },
    template: template,
   link: function(scope, element) {
      var children = element.children();
      var prevLi  = angular.element(children[0]);
      var nextLi  = angular.element(children[2]);
      
      prevLi.bind('click', function(){
        prev(scope, prevLi, nextLi);  
      }); 
      
      nextLi.bind('click', function(){
        next(scope, prevLi, nextLi);   
      });

      scope.$watch('count', function(){
        scope.countPages = Math.ceil(scope.count / scope.limit);   
        disable(scope, prevLi, 1);
        disable(scope, nextLi, scope.countPages);
      });
    }
  }
  return config;
});
    
})();


