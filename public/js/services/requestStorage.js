angular.module('zdrojak.service').factory('requestStorage', function(){

  function RequestStorage() {
    this.requests = [];
  }

  RequestStorage.prototype.clear = function() {
    this.requests = [];
  };

  RequestStorage.prototype.getAll = function() {
    return this.requests;
  };

  RequestStorage.prototype.add = function(req) {
    this.requests.push(req);
  };

  return new RequestStorage();

});
