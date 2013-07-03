/**
 * Parametricke vyhledavani
 *
 */

angular.module('zdrojak.service').factory('urlFilter', ['$location', function($location){
  return function(config) {
    var search = new UrlFilter(config);
    search.setParams($location.search());
    return search;
  }
}]);