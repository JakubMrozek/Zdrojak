var url = require(process.cwd() + '/lib/filters/removeDiacritics');

describe('remove diacritics filter', function(){
  it('odstrani diakritiku', function(){
    url('příliš žluťoučký kůň úpěl ďábelské ódy').should.eql('prilis zlutoucky kun upel dabelske ody');
    url('PŘÍLIŠ ŽLUŤOUČKÝ KŮŇ ÚPĚL ĎÁBELSKÉ ÓDY').should.eql('PRILIS ZLUTOUCKY KUN UPEL DABELSKE ODY');
  })
});

