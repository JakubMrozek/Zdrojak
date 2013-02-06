describe('ParametricSearch', function(){   
    
  var ps;  
  beforeEach(function(){
    ps = new ParametricSearch({
      limit: 10, sortColumns: ['price', '-price']    
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
      ps.setParams({sort: '-price'}); 
      expect(ps.getSort()).toBe('-price');
    });
  
    it('vrati vychozi sloupec strankovani, pokud neni zadny zadan', function(){
      ps.setParams({}); 
      expect(ps.getSort()).toBe('price');
    });      
      
    it('vrati vychozi sloupec strankovani, pokud zadany ve vyctu neexistuje', function(){
      ps.setParams({sort: 'abc'}); 
      expect(ps.getSort()).toBe('price');
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
  
});