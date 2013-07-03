'use strict';

/**
 * Spoji prvky pole do retezce pomoci Array metody join().
 *
 * Pokud neni parametr values pole, bude vracen jak byl predan.
 *
 * @param {Array} values
 * @param {String} delimiter
 * @return {String}
 */

angular.module('zdrojak.filter').filter('join', function(){
  return function(values, delimiter) {
    if (Array.isArray(values)) {
      return values.join(delimiter);
    }
    return values;
  }
});