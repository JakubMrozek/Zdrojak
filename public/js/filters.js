'use strict';

/* Filters */

zdrojak.filter('join', function() {
  return function(values, delimiter) {
    if (angular.isArray(values)) {
      return values.join(delimiter);    
    }
    return values;
  }
});
