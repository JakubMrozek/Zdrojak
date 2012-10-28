var url = require(process.cwd() + '/lib/filters/url');

describe('url filter', function(){
    it('prevede mezery na pomlcky', function(){
        url('nejaky nazev stranky').should.eql('nejaky-nazev-stranky');
    })  
    
    //TODO 
    //pridat dalsi testy
});