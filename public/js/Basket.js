

/**
 * Implementace nakupniho kosiku.
 */

function Basket(storage) {
  this._storage = storage;
  this._listeners = [];
}

Basket.prototype.addListener = function(fc) {
  for (var i = 0; i < this._listeners.length; ++i) {
    if (this._listeners[i].toString() === fc.toString()) {
      return;    
    }
  }
  this._listeners.push(fc);  
};

Basket.prototype.notify = function() {
  for (var i = 0; i < this._listeners.length; ++i) {
    this._listeners[i].call(this);     
  }    
};

Basket.prototype.hasProducts = function() {
  return Object.keys(this.products()).length > 0; 
};

Basket.prototype.hasCustomer = function() {
  var customer = this.customer();
  if (!customer) {
    return false;
  }
  return Object.keys(customer).length > 0; 
};

Basket.prototype.priceProducts = function() {
  var products = this._storage.getAll();
  var price = 0;
  for (var id in products) {
    price += products[id].price * products[id].quantity;
  }
  return price;
};

Basket.prototype.priceTotal = function() {
  return this.priceProducts() + this.transport().price;
};


Basket.prototype.add = function(id, name, url, variant, price) {
  this._storage.add({
    id: id, name: name, url: url, variant: variant, price: price    
  });    
  this.notify();
};

Basket.prototype.exist = function(id, variant) {
  return this._storage.exist(id, variant);    
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

Basket.prototype.updateQuantity = function(quantity, id, variant) {
  this._storage.updateQuantity(quantity, id, variant);    
  this.notify();
};

Basket.prototype.remove = function(id, variant) {
  this._storage.remove(id, variant);    
  this.notify();
};

Basket.prototype.clear = function() {
  this._storage.clear();    
  this.notify();
}