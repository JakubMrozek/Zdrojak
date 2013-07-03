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

angular.module('zdrojak.directive').directive('range', function range(){
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