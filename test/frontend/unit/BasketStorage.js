describe('BasketStorage', function(){   
    
  var storage;  
    
  beforeEach(function(){
    storage = new BasketStorage();  
    storage.clear();
  });
    
  it('prida novy produkt do uloziste', function(){
    storage.add(12345, {});
    expect(storage.get(12345)).toEqual({quantity: 1});
  });
  
  it('zmeni mnozstvi produktu v kosiku', function(){
    storage.add(12345, {});
    storage.updateQuantity(12345, 10);
    expect(storage.get(12345)).toEqual({quantity: 10});
  });  
  
  it('odstrani produkt z kosiku', function(){
    storage.add(12345, {});
    storage.remove(12345);
    expect(storage.get(12345)).toBeUndefined();
  });
  
  it('vrati vsechny produkty v kosiku', function(){
    storage.add(12345, {});
    storage.add(12346, {});
    storage.add(12347, {});
    expect(storage.getAll()).toEqual({
      12345: {quantity: 1}, 12346: {quantity: 1}, 12347: {quantity: 1}
    });
  });
  
  it('edituje data uzivatele', function(){
    storage.updateCustomer({name: 'Jakub', surname: 'Mrozek'});
    expect(storage.getCustomer()).toEqual({name: 'Jakub', surname: 'Mrozek'});
  });
  
  it('edituje informace o doprave', function(){
    storage.updateTransport({name: 'Doprava ABC'});
    expect(storage.getTransport()).toEqual({name: 'Doprava ABC'});
  });
  
  it('edituje informace o platbe', function(){
    storage.updatePayment({name: 'Platba ABC'});
    expect(storage.getPayment()).toEqual({name: 'Platba ABC'});
  });
    
});