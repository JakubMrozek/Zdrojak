var util = require(process.cwd() + '/lib/util');

describe('util', function(){
  describe('metoda fullUrl', function(){
    it('vytvori z absolutni URL plnou URL', function() {
      var req = {
        host: 'example.com',
        protocol: 'http'
      };
      util.fullUrl('/abc/def', req).should.eql('http://example.com/abc/def');
    });
  });
});

