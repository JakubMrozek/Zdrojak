var error = require(process.cwd() + '/middleware/error');
var AppError = require(process.cwd() + '/lib/error').AppError;

describe('middleware error', function(){
    
  it('pri aplikacni chybe odesle do prohlizece kod a zpravu', function(){
    var err = new AppError();
    err.status = 400;
    err.type = 'Chyba';
    err.message = 'Chyba...';
    var req = {};
    var res = {
      send: function(code, info) {
        code.should.eql(400);
        info.type.should.eql(err.type);
        info.message.should.eql(err.message);
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