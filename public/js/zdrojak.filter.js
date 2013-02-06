'use strict';

/* Filtery */

(function() {      
    
var module = angular.module('zdrojak.filter', []);

/**
 * Spoji prvky pole do retezce pomoci Array metody join().
 * 
 * Pokud neni parametr values pole, bude vracen jak byl predan. 
 *
 * @param {Array} values
 * @param {String} delimiter 
 * @return {String}
 */

module.filter('join', function(){
  return function(values, delimiter) {
    if (Array.isArray(values)) {
      return values.join(delimiter);    
    }
    return values;  
  }
});
    
})();