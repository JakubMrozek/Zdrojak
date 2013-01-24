

/**
 * Implementace nakupniho kosiku.
 */


/**
 * @param {BasketStorage} storage Uloziste kosiku.
 */

function Basket(storage) {
  this._storage = storage;
  this._listeners = [];
}


/**
 * Vlozeni posluchace (funkce), ktera bude zavolana pri zmene obsahu kosiku.
 * 
 * Implementace navrhoveho vzoru Observer.
 * 
 * TODO: kontroluje registrovaneho posluchace pouze pomoci obsahu funkce, opravit.
 * 
 * @param {Function} fc
 */

Basket.prototype.addListener = function(fc) {
  for (var i = 0; i < this._listeners.length; ++i) {
    if (this._listeners[i].toString() === fc.toString()) {
      return;    
    }
  }
  this._listeners.push(fc);  
};


/**
 * Zavola vsechny registrovane posluchace pri zmene obsahu kosiku.
 * 
 * Implementace navrhoveho vzoru Observer.
 */

Basket.prototype.notify = function() {
  for (var i = 0; i < this._listeners.length; ++i) {
    this._listeners[i].call(this);     
  }    
};


/**
 * Vraci true, pokud jsou v kosiku nejake produkty, jinak false.
 * 
 * @return {Boolean}
 */

Basket.prototype.hasProducts = function() {
  return Object.keys(this.products()).length > 0; 
};


/**
 * Vraci true, pokud uzivatel jiz vyplnil zakaznicke udaje.
 * 
 * @return {Boolean}
 */

Basket.prototype.hasCustomer = function() {
  var customer = this.customer() || {};
  return Object.keys(customer).length > 0; 
};


/**
 * Vraci soucet cen vsech produktu a variant v kosiku.
 * 
 * @return {Number}
 */

Basket.prototype.priceProducts = function() {
  var products = this._storage.getAll();
  var price = 0;
  for (var id in products) {
    price += products[id].price * products[id].quantity;
  }
  return price;
};


/**
 * Vraci celkovou cenu objednavky (cena produktu + cena dopravy a platby).
 * 
 * @return {Number}
 */

Basket.prototype.priceTotal = function() {
  return this.priceProducts() + this.transport().price;
};


/**
 * Pridava novy produkt do kosiku.
 * 
 * Po pridani zavola vsechny registrovane posluchace.
 * 
 * @param {String} id ID produktu.
 * @param {String} name Nazev produktu.
 * @param {String} url URL produktu.
 * @param {String} variant Nazev varianty.
 * @param {Number} price Cena produktu.
 */

Basket.prototype.add = function(id, name, url, variant, price) {
  this._storage.add({
    id: id, name: name, url: url, variant: variant, price: price, quantity: 1   
  });    
  this.notify();
};


/**
 * Vraci true, pokud jiz dany produkt (a varianta) je v kosiku, jinak false.
 * 
 * @param {String} id ID produktu.
 * @param {String} variant Nazev varianty.
 * @return {Boolean}
 */

Basket.prototype.exist = function(id, variant) {
  return this._storage.exist(id, variant);    
};


/**
 * Vraci seznam vsech produktu v kosiku. 
 * 
 * @return {Object}
 */

Basket.prototype.products = function() {
  return this._storage.getAll();    
};


/**
 * Vraci informace o zakaznikovi.
 * 
 * @return {Object}
 */

Basket.prototype.customer = function() {
  return this._storage.getCustomer();    
};


/**
 * Upravi zakaznicke udaje objednavky.
 * 
 * @param {Object} data Zakaznicke udaje.
 */

Basket.prototype.updateCustomer = function(data) {
  this._storage.updateCustomer(data); 
};


/**
 * Vraci informace o doprave a platbe.
 * 
 * @return {Object}
 */

Basket.prototype.transport = function() {
  return this._storage.getTransport();    
};


/**
 * Upravi informace o doprave a platbe.
 * 
 * @param {Object} data Doprava a platba.
 */

Basket.prototype.updateTransport = function(data) {
  this._storage.updateTransport(data); 
};


/**
 * Upravi pocet ks daneho produktu v databazi a zavola vsechny posluchace.
 * 
 * @param {Number} quantity Nove mnozstvi produktu v databazi.
 * @param {String} id ID produktu.
 * @param {String} variant Nazev varianty.
 */

Basket.prototype.updateQuantity = function(quantity, id, variant) {
  this._storage.updateQuantity(quantity, id, variant);    
  this.notify();
};


/**
 * Odstrani jeden produkt z kosiku a zavola registrovane posluchace.
 * 
 * @param {String} id ID produktu.
 * @param {String} variant Nazev varianty.
 */

Basket.prototype.remove = function(id, variant) {
  this._storage.remove(id, variant);    
  this.notify();
};


/**
 * Vycisti obsah kosiku a zavola zaregistrovane poluchace.
 */

Basket.prototype.clear = function() {
  this._storage.clear();    
  this.notify();
};