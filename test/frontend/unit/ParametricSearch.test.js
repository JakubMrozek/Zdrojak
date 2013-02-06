describe('ParametricSearch', function(){   
    
  var ps;  
  beforeEach(function(){
    ps = new ParametricSearch({
      limit: 10, orderColumns: ['price', '-price']    
    });  
  });
  
  describe('strankovani', function(){
    it('vrati aktualni stranku', function() {
      ps.setParams({offset: 0}); 
      expect(ps.getPage()).toBe(1);
      expect(ps.getOffset()).toBe(0);
      ps.setParams({offset: 30}); 
      expect(ps.getPage()).toBe(4);
      expect(ps.getOffset()).toBe(30);
    });
    
    it('vrati stranku 1, pokud neni zadan parametr offset', function(){
      ps.setParams({});    
      expect(ps.getPage()).toBe(1);
      expect(ps.getOffset()).toBe(0);
    }); 
    
    it('vrati stranku 1, pokud parametr offset neni delitelny parametrem limit', function(){
      ps.setParams({offset: 234});    
      expect(ps.getPage()).toBe(1);
      expect(ps.getOffset()).toBe(0);
    }); 
    
    it('vrati stranku 1, pokud je parametr offset mensi nez 0', function(){
      ps.setParams({offset: -10});    
      expect(ps.getPage()).toBe(1);
      expect(ps.getOffset()).toBe(0);
    });
  });
  
  
  describe('razeni', function(){
    it('vrati sloupec, podle ktereho se ma strankovat', function(){
      ps.setParams({order: '-price'}); 
      expect(ps.getOrder()).toBe('-price');
    });
  
    it('vrati vychozi sloupec strankovani, pokud neni zadny zadan', function(){
      ps.setParams({}); 
      expect(ps.getOrder()).toBe('price');
    });      
      
    it('vrati vychozi sloupec strankovani, pokud zadany ve vyctu neexistuje', function(){
      ps.setParams({order: 'abc'}); 
      expect(ps.getOrder()).toBe('price');
    }); 
  });
  
  describe('filtrovani', function(){
    it('vrati jeden parametr z URL', function(){
      ps.setParams({abc: 'efg'}); 
      expect(ps.getParam('abc')).toBe('efg');
      ps.setParams({}); 
      expect(ps.getParam('abc', 123)).toBe(123);
    });
    
    it('vrati jeden parametr filtrovani z URL', function(){
      ps.setParams({filter: 'a:123@b:a,b,c'}); 
      expect(ps.getFilterParam('a')).toEqual(['123']);
      expect(ps.getFilterParam('b')).toEqual(['a','b','c']);
      expect(ps.getFilterParam('c', 42)).toEqual(42);
      expect(ps.getFilterParamAsString('a')).toEqual('123');
    });
  });
  
  describe('pomocne metody', function(){
    it('vrati true, pokud je hodnota typu undefined', function(){
      var abc = {efg: true};
      expect(ps._isUndefined(abc.abc)).toBeTruthy();
      expect(ps._isUndefined(abc.efg)).toBeFalsy();
    });
    it('vrati true, pokud je hodnota typu retezec', function(){
      expect(ps._isString('abeceda')).toBeTruthy();
      expect(ps._isString(1)).toBeFalsy();
      expect(ps._isString({})).toBeFalsy();
    });
  });
  
});