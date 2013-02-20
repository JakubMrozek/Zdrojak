describe('Price', function(){   
    
  var price;  
    
  beforeEach(function(){
    price = new Price();  
  });
    
  it('spocita celkovy soucet cen produktu', function(){
    var products = [
      {price: 1000, quantity: 10}, 
      {price: 500, quantity: 2}
    ];  
    expect(price.products(products)).toBe(11000);
  });
  
  it('spocita celkovou cenu objednavky', function(){
    var products = [
      {price: 1000, quantity: 10}, 
      {price: 500, quantity: 2}
    ]; 
    expect(price.total(products, 79)).toBe(11079);
  });
  
});