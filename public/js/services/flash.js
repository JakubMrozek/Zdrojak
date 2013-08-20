angular.module('zdrojak.service').factory('flash', ['$rootScope', function($rootScope){
  
  function Flash() {}
  
  Flash.prototype.info = function(message) {
    this.add('info', message);
  };
  
  Flash.prototype.error = function(message) {
    this.add('error', message); 
  };
  
  Flash.prototype.add = function(type, message) {
    $rootScope.$broadcast('messages:add', {
      message: Array.isArray(message) ? message : [message],
      type: type
    });  
  };
  
  Flash.prototype.reset = function() {
    $rootScope.$broadcast('messages:reset');  
  };
  
  return new Flash();
}]);