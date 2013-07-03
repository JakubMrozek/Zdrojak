/**
 * Parametricke vyhledavani
 *
 */

angular.module('zdrojak.service').factory('formFilter', ['$location', 'urlFilter', function($location, urlFilter){
  return function($scope, config) {
    return new FormFilter($scope, config, urlFilter(config), $location);
  }
}]);