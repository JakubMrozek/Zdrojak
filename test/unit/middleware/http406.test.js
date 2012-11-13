var http406 = require(process.cwd() + '/middleware/http406');
var NotAcceptable = require(process.cwd() + '/lib/error').NotAcceptable;

describe('middleware http406', function(){
    
  it('vrati HTTP kod 406, pokud uzivatel pozaduje vratit data v jinem formatu nez JSON', function(){
    var req = {
      accepts: function() { return false; }
    };
    var res = {};
    var next = function(err) {
      err.should.be.an.instanceof(NotAcceptable);
    };
    http406()(req, res, next);
  });  
    
});