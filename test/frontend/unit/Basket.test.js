describe('Basket', function(){   
    
  var basket;  
    
  beforeEach(function(){
    basket = new Basket(window);  
    basket.clear();
  });
    
  it('prida novy produkt s variantou do uloziste', function(){
    basket.add({id: 12345, variant: 'cerny'});
    expect(basket.exist(12345, 'cerny')).toBeTruthy();
    expect(basket.get(12345, 'cerny')).toEqual({id: 12345, variant: 'cerny'});
  });
  

  it('prida novy produkt bez varianty do uloziste', function(){
    basket.add({id: 12345});
    expect(basket.exist(12345)).toBeTruthy();
    expect(basket.get(12345)).toEqual({id: 12345});
  });
  
  it('zmeni mnozstvi produktu s variantou v kosiku', function(){
    basket.add({id: 12345, variant: 'cerny'});
    basket.updateQuantity(10, 12345, 'cerny');
    expect(basket.get(12345, 'cerny').quantity).toEqual(10);
  });  
  
  it('zmeni mnozstvi produktu bez varianty v kosiku', function(){
    basket.add({id: 12345});
    basket.updateQuantity(10, 12345);
    expect(basket.get(12345).quantity).toEqual(10);
  });  
  
  it('odstrani produkt bez varianty z kosiku', function(){
    basket.add(12345, {});
    basket.remove(12345);
    expect(basket.get(12345)).toBeUndefined();
  });
  
  it('odstrani produkt s variantou z kosiku', function(){
    basket.add({id: 12345, variant: 'cerny'});
    basket.add({id: 12345, variant: 'bily'});
    basket.remove(12345, 'cerny');
    expect(basket.get(12345, 'cerny')).toBeUndefined();
    expect(basket.get(12345, 'bily')).toBeDefined();
  });
  
  it('vrati vsechny produkty v kosiku', function(){
    basket.add({id: 12456, variant: 'cerny'});
    basket.add({id: 12457, variant: 'bily'});
    basket.add({id: 12459, variant: 'modry'});
    expect(basket.getAll()).toEqual([
      {id: 12456, variant: 'cerny'},
      {id: 12457, variant: 'bily'},
      {id: 12459, variant: 'modry'}
    ]);
  });
  
  it('edituje data uzivatele', function(){
    basket.updateCustomer({name: 'Jakub', surname: 'Mrozek'});
    expect(basket.getCustomer()).toEqual({name: 'Jakub', surname: 'Mrozek'});
  });
  
  it('edituje informace o doprave', function(){
    basket.updateTransport({name: 'Doprava ABC'});
    expect(basket.getTransport()).toEqual({name: 'Doprava ABC'});
  });
  
  it('vymaze obsah kosiku', function(){
    basket.add({id: 12456, variant: 'cerny'});
    basket.updateCustomer({name: 'Jakub', surname: 'Mrozek'});
    basket.updateTransport({name: 'Doprava ABC'});   
    basket.clear();
    expect(basket.getAll()).toEqual([]);
    expect(basket.getCustomer()).toBeNull();
    expect(basket.getTransport()).toBeNull(); 
  });  
  
  it('spocita celkovy soucet cen produktu v kosiku', function(){
    basket.getAll = function() {
      return [
        {price: 1000, quantity: 10}, 
        {price: 500, quantity: 2}
      ];    
    };
    expect(basket.priceProducts()).toBe(11000);
  });
  
  it('spocita celkovou cenu objednavky', function(){
    basket.priceProducts = function() {
      return 11000;    
    };
    basket.getTransport = function() {
      return {price: 79}; 
    };
    expect(basket.priceTotal()).toBe(11079);
  });
  
});