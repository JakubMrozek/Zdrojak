var Page = require(process.cwd() + '/app/models/Page');
var PageHoraa = require('horaa')(process.cwd() + '/app/models/Page');

describe('model Page', function(){
    
  describe('metoda inSchema', function() {
    it('vrati true, pokud pole ve schema je, jinak vrátí false', function() {
      Page.inSchema({url:1}).should.equal(true);    
      Page.inSchema({neexistujici:1}).should.equal(false);    
    });
  });    
    
  describe('metoda findOneByUrl', function() {
    it('zavola metodu findOne() s podminkou pro vyber dokumentu podle url', function(){
      PageHoraa.hijack('findOne', function(url) {
        url.should.eql({url: 'url-stranky'});
      });
      Page.findOneByUrl('url-stranky', function(){});
      PageHoraa.restore('findOne');
    });
  });
});