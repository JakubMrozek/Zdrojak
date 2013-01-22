describe('Basket', function(){   
    
  var basket, storage;
    
  beforeEach(function(){
    storage = {};
    basket = new Basket(storage); 
  });
    
  it('upozorni posluchace pri zmene obsahu kosiku', function(){
    var count = 0;
    var listener = function(){ 
      ++count;
    };
    basket.addListener(listener);
    
    //fake metody
    storage.add = function(){};
    storage.updateQuantity = function(){};
    storage.remove = function(){};
    storage.clear = function(){};
    
    basket.add();
    expect(count).toBe(1);
    
    basket.updateQuantity();
    expect(count).toBe(2);
    
    basket.remove();
    expect(count).toBe(3);
    
    basket.clear();
    expect(count).toBe(4);
  });
  
  it('nezaregistruje jednoho posluchace vice nez jednou', function(){
    var count = 0;
    var listener = function(){
      ++count;
    };
    basket.addListener(listener);
    basket.addListener(listener);
    basket.addListener(listener);
    basket.notify();
    expect(count).toBe(1);
  });
  
  it('spocita celkovy soucet cen produktu v kosiku', function(){
    storage.getAll = function() {
      return [{price: 1000, quantity: 10}, {price: 500, quantity: 2}];    
    };
    expect(basket.priceProducts()).toBe(11000);
  });
  
  it('spocita celkovou cenu objednavky', function(){
    basket.priceProducts = function() {
      return 11000;    
    };
    storage.getTransport = function() {
      return {price: 79}; 
    };
    expect(basket.priceTotal()).toBe(11079);
  });
  
});