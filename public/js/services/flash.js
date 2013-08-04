/**
 *  Flash messanger
 */

angular.module('zdrojak.service').factory('flash', ['$rootScope', function($rootScope){
  
  function Flash() {}
  
  Flash.prototype.message = function(message) {
    this.add('info', message);
  };
  
  Flash.prototype.error = function(message) {
    this.add('error', message); 
  };
  
  Flash.prototype.add = function(type, message) {
    $rootScope.$broadcast('flashMessages:add', {
      message: Array.isArray(message) ? message : [message],
      type: type
    });  
  };
  
  Flash.prototype.reset = function() {
    $rootScope.$broadcast('flashMessages:reset');  
  };
  
  return new Flash();
  
}]);