var Page = require(process.cwd() + '/models/Page');
var PageHoraa = require('horaa')(process.cwd() + '/models/Page');

describe('model Page', function(){
    
  describe('pred validaci a vlozenim/editaci', function() {
    it('se vytvori URL ze z titulku', function(done) {
      var page = new Page();
      page.title = 'Obchodni podminky';
      page.content = 'Lorem ipsum set dolorem';
      page.validate(function(){
        page.url.should.eql('obchodni-podminky');  
        done();
      });
    });
    
    it('se vytvori nezmeni URL, pokud jiz bylo nejake vytvoreno', function(done) {
      var page = new Page();
      page.title = 'Obchodni podminky';
      page.url = 'jina-url';
      page.content = 'Lorem ipsum set dolorem';
      page.validate(function(){
        page.url.should.eql('jina-url');  
        done();
      });
    });
  });  
    
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