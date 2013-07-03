
/**
 * Nahravani souboru.
 *
 */
angular.module('zdrojak.service').factory('uploadFile', function(){
  return function() {
    return new Upload(new XMLHttpRequest(), new FormData());
  }
});