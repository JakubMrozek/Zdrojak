/**
 * Nakupni kosik.
 *
 */

angular.module('zdrojak.service').factory('basket', ['$window', '$rootScope', function($window, $rootScope){
  var basket = new Basket($window, function(){
    $rootScope.$apply();
  }, new Price());
  return basket;
}]);