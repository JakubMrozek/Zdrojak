var http415 = require(process.cwd() + '/app/middleware/http415');

describe('middleware http415', function(){
    
  it('vrati HTTP kod 415, pokud uzivatel zaslal data v jinem formatu nez v JSON', function(){
    var req = {
        method: 'POST',
        body: {'abc': 'abc'},
        is: function() { return false; }
    };
    var res = {};
    var next = function(err) {
        err.should.equal(415);
    };
    http415()(req, res, next);
  });  
    
});