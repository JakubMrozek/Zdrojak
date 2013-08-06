angular.module('zdrojak.service').factory('error4xx', ['$rootScope', 'flash', function($rootScope, flash){
  return function(promise)  {
    return promise.then(null, function(res){
      var errors = res.data.errors;
      if (Array.isArray(errors)) {
        var messages = [];
        for (var i = 0; i < errors.length; ++i) {
        	if (errors[i].userMessage) {
        		messages.push(errors[i].userMessage);
        	}
        }
        if (messages.length) {
          flash.info(messages);
        }
      }
      return res;
    });
  };
}]);