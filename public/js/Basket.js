
/**
 * Implementace nakupniho kosiku.
 */

function Basket(storage) {
  this._storage = storage;
  this._listeners = [];
}

Basket.prototype.addListener = function(fc) {
  this._listeners.push(fc);  
};

Basket.prototype.notify = function() {
  for (var i = 0; i < this._listeners.length; ++i) {
    this._listeners[i].call(this);     
  }    
};

Basket.prototype.price = function() {
  var products = this._storage.getAll();
  var price = 0;
  for (var id in products) {
    price += products[id].price * products[id].quantity;
  }
  return price;
};

Basket.prototype.add = function(id, name, url, variant, price) {
  this._storage.add(id, {
    id: id, name: name, url: url, variant: variant, price: price    
  });    
  this.notify();
};

Basket.prototype.products = function() {
  return this._storage.getAll();    
};

Basket.prototype.customer = function() {
  return this._storage.getCustomer();    
};

Basket.prototype.updateCustomer = function(data) {
  return this._storage.updateCustomer(data); 
};


Basket.prototype.transport = function() {
  return this._storage.getTransport();    
};

Basket.prototype.updateTransport = function(id) {
  return this._storage.updateTransport(id); 
};

Basket.prototype.updateQuantity = function(id, quantity) {
  this._storage.updateQuantity(id, quantity);    
  this.notify();
};

Basket.prototype.remove = function(id) {
  this._storage.remove(id);    
  this.notify();
}