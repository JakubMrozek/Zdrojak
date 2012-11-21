var http415 = require(process.cwd() + '/middleware/http415');
var UnsupportedMediaType = require(process.cwd() + '/lib/error').UnsupportedMediaType;

describe('middleware http415', function(){
    
  it('vrati HTTP kod 415, pokud uzivatel zaslal data v jinem formatu nez v JSON', function(){
    var req = {
      method: 'POST',
      body: {'abc': 'abc'},
      is: function() { return false; }
    };
    var res = {};
    var next = function(err) {
      err.should.be.an.instanceof(UnsupportedMediaType);
    };
    http415()(req, res, next);
  });  
    
});