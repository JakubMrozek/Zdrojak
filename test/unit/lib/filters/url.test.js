var url = require(process.cwd() + '/lib/filters/url');

describe('url filter', function(){
    it('prevede mezery na pomlcky', function(){
        url('nejaky nazev stranky').should.eql('nejaky-nazev-stranky');
    })

    it('odstrani diakritiku', function(){
        url('příliš žluťoučký kůň úpěl ďábelské ódy').should.eql('prilis-zlutoucky-kun-upel-dabelske-ody');
    })

    it('prevede na mala pismena', function(){
        url('PŘÍLIŠ ŽLUŤOUČKÝ KŮŇ ÚPĚL ĎÁBELSKÉ ÓDY').should.eql('prilis-zlutoucky-kun-upel-dabelske-ody');
    })

    it('z vice mezer udela jednu', function(){
        url('velka          propast').should.eql('velka-propast');
    })

    it('odstrani i jine bile znaky', function(){
        url('velka \t\n\r\t propast').should.eql('velka-propast');
    })

    it('odstrani bile znaky ze zacatku i konce', function(){
        url(' \na eio u\t ').should.eql('a-eio-u');
    })
    
    it('odstrani vsechno mimo alfanumerickych znaku a pomlcky', function(){
        url('a*>/-<[]a').should.eql('a-a');
    })
});

