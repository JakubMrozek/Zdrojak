var error = require(process.cwd() + '/middleware/error');
var NotAcceptable = require(process.cwd() + '/lib/error').NotAcceptable;

describe('middleware error', function(){
    
  it('pri aplikacni chybe odesle do prohlizece kod a zpravu', function(){
    var err = new NotAcceptable();
    var req = {};
    var res = {
      send: function(code, info) {
        info.type.should.eql('NotAcceptable');
        info.message.should.eql('Pozadavek na format, ktery neni podporovan.');
      }
    };
    var next = function() {};
    error()(err, req, res, next);
  });
  
  it('pri nezname chybe preda zpracovani chyby dale', function(){
    var err = 'err';
    var req = {};
    var res = {};
    var next = function(err) {
        err.should.eql('err');
    };
    error()(err, req, res, next);
  });
    
});