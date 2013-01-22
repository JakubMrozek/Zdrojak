describe('BasketStorage', function(){   
    
  var storage;  
    
  beforeEach(function(){
    storage = new BasketStorage();  
    storage.clear();
  });
    
  it('prida novy produkt s variantou do uloziste', function(){
    storage.add({id: 12345, variant: 'cerny'});
    expect(storage.exist(12345, 'cerny')).toBeTruthy();
    expect(storage.get(12345, 'cerny')).toEqual(
      {id: 12345, variant: 'cerny', quantity: 1}
    );
  });
  
  it('prida novy produkt bez varianty do uloziste', function(){
    storage.add({id: 12345});
    expect(storage.exist(12345)).toBeTruthy();
    expect(storage.get(12345)).toEqual(
      {id: 12345, quantity: 1}
    );
  });
  
  it('zmeni mnozstvi produktu s variantou v kosiku', function(){
    storage.add({id: 12345, variant: 'cerny'});
    storage.updateQuantity(10, 12345, 'cerny');
    expect(storage.get(12345, 'cerny').quantity).toEqual(10);
  });  
  
  it('zmeni mnozstvi produktu bez varianty v kosiku', function(){
    storage.add({id: 12345});
    storage.updateQuantity(10, 12345);
    expect(storage.get(12345).quantity).toEqual(10);
  });  
  
  it('odstrani produkt bez varianty z kosiku', function(){
    storage.add(12345, {});
    storage.remove(12345);
    expect(storage.get(12345)).toBeUndefined();
  });
  
  it('odstrani produkt s variantou z kosiku', function(){
    storage.add({id: 12345, variant: 'cerny'});
    storage.add({id: 12345, variant: 'bily'});
    storage.remove(12345, 'cerny');
    expect(storage.get(12345, 'cerny')).toBeUndefined();
    expect(storage.get(12345, 'bily')).toBeDefined();
  });
  
  it('vrati vsechny produkty v kosiku', function(){
    storage.add({id: 12456, variant: 'cerny'});
    storage.add({id: 12457, variant: 'bily'});
    storage.add({id: 12459, variant: 'modry'});
    expect(storage.getAll()).toEqual([
      {id: 12456, variant: 'cerny', quantity: 1},
      {id: 12457, variant: 'bily', quantity: 1},
      {id: 12459, variant: 'modry', quantity: 1}
    ]);
  });
  
  it('edituje data uzivatele', function(){
    storage.updateCustomer({name: 'Jakub', surname: 'Mrozek'});
    expect(storage.getCustomer()).toEqual({name: 'Jakub', surname: 'Mrozek'});
  });
  
  it('edituje informace o doprave', function(){
    storage.updateTransport({name: 'Doprava ABC'});
    expect(storage.getTransport()).toEqual({name: 'Doprava ABC'});
  });
  
  it('vymaze obsah kosiku', function(){
    storage.add({id: 12456, variant: 'cerny'});
    storage.updateCustomer({name: 'Jakub', surname: 'Mrozek'});
    storage.updateTransport({name: 'Doprava ABC'});   
    storage.clear();
    expect(storage.getAll()).toEqual([]);
    expect(storage.getCustomer()).toBeNull();
    expect(storage.getTransport()).toBeNull(); 
  });  
});