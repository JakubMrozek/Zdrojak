var fields = require(process.cwd() + '/app/middleware/fields');

describe('middleware fields', function(){
    
  it('rozdeli parametr fields na samostatne pole', function(){
    var req = { query: { fields: 'field1,field2,field3' } };
    var res = {};
    var next = function() {};
    fields()(req, res, next);
    req.zdrojak.fields.should.eql({
      field1: 1, field2: 1, field3: 1
    });
  });  
    
  it('odstrani z vraceneho pole prazdne elementy', function(){
    var req = { query: { fields: 'field1, ,field2,field3,' } };
    var res = {};
    var next = function() {};
    fields()(req, res, next);
    req.zdrojak.fields.should.eql({
      field1: 1, field2: 1, field3: 1
    });
  }); 
    
});