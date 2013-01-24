
/**
 * Implementace informaci o nakupu zakaznika pres HTML5 local storage.
 * 
 */

function Basket(window, listener) {
  this._storage = window.localStorage;
  this._listener = listener;
  this._setEventStorage(window);
}


//data o produktech
Basket.NS_PRODUCTS = 'products';


//data o zakaznikovi
Basket.NS_CUSTOMER = 'customer';


//data o doprave
Basket.NS_TRANSPORT = 'transport';


/**
 * Upozorni dalsi okna na zmenu modelu v jinem okne.
 * 
 */

Basket.prototype.notify = function() {
  this._listener.call(this);
};


/**
 * Vlozi novy produkt do kosiku.
 * 
 * @param {Object} product
 */

Basket.prototype.add = function(product) {
  var products = this.getAll();
  products.push(product);
  this._saveProducts(products);
};


/**
 * Vraci true, pokud je produkt jiz v kosiku. Jinak false.
 * 
 * @param {String} id ID produktu.
 * @param {String} variant Varianta produktu.
 * @return {Boolean}
 */

Basket.prototype.exist = function(id, variant) {
  return Boolean(this.get(id, variant));
};


/**
 * Vraci jeden produkt podle ID.
 * 
 * @param {String} id ID produktu.
 * @param {String} variant Varianta produktu.
 * @return {Object}
 */

Basket.prototype.get = function(id, variant) {
  var products = this.getAll();
  for (var i = 0; i < products.length; ++i) {
    if (this._equals(products[i], id, variant)) {
      return products[i];    
    }    
  }
};


/**
 * Vraci vsechny ulozene produkty.
 * 
 * @return {Array}
 */

Basket.prototype.getAll = function() {
  var products = this._storage.getItem(Basket.NS_PRODUCTS);
  
  //v ulozisti uz drive neco bylo.
  if (typeof products === 'string') {
    products = JSON.parse(products);   
  }
  
  //neni ulozen zadny produkt
  if (products === null) {
    products = [];  
  }
  
  return products;
};


/**
 * Vraci true, pokud jsou v kosiku nejake produkty, jinak false.
 * 
 * @return {Boolean}
 */

Basket.prototype.hasProducts = function() {
  return Object.keys(this.getAll()).length > 0; 
};


/**
 * Vraci true, pokud uzivatel jiz vyplnil zakaznicke udaje.
 * 
 * @return {Boolean}
 */

Basket.prototype.hasCustomer = function() {
  var customer = this.getCustomer() || {};
  return Object.keys(customer).length > 0; 
};


/**
 * Upravi mnozstvi zbozi v kosiku u daneho produktu.
 * 
 * @param {Number} quantity Aktualizovane mnozstvi zbozi v kosiku.
 * @param {String} id ID produktu
 * @param {String} variant Varianta produktu.
 * @return {Boolean} 
 */

Basket.prototype.updateQuantity = function(quantity, id, variant) {
  var products = this.getAll();
  for (var i = 0; i < products.length; ++i) {
    if (this._equals(products[i], id, variant)) {
      products[i].quantity = quantity;
      this._saveProducts(products);
      break;
    }    
  }
};


/**
 * Odstraneni jedne polozky z kosiku.
 * 
 * @param {String} id ID produktu
 * @param {String} variant Varianta produktu.
 */

Basket.prototype.remove = function(id, variant) {
  var oldProducts = this.getAll(); 
  var newProducts = [];
  for (var i = 0; i < oldProducts.length; ++i) {
    if (!this._equals(oldProducts[i], id, variant)) {
      newProducts.push(oldProducts[i]);
    }    
  }   
  this._saveProducts(newProducts);
};


/**
 * Vyprazdnit cele lokalni uloziste.
 * 
 */

Basket.prototype.clear = function() {
  this._storage.removeItem(Basket.NS_PRODUCTS);  
  this._storage.removeItem(Basket.NS_CUSTOMER);  
  this._storage.removeItem(Basket.NS_TRANSPORT);  
}


/**
 * Vrati udaje o zakaznikovi.
 * 
 * @return {Object}
 */

Basket.prototype.getCustomer = function() {
  return JSON.parse(this._storage.getItem(Basket.NS_CUSTOMER));
};


/**
 * Uprava uzivatelskych udaju.
 * 
 * @param {Object} data
 */

Basket.prototype.updateCustomer = function(data) {
  this._storage.setItem(Basket.NS_CUSTOMER, JSON.stringify(data));    
};


/**
 * Vrati informace o vybrane doprave.
 * 
 * @return {Object}
 */ 

Basket.prototype.getTransport = function() {
  return JSON.parse(this._storage.getItem(Basket.NS_TRANSPORT));
};


/**
 * Uprava zpusobu dopravy.
 * 
 * @param {Object} data
 */

Basket.prototype.updateTransport = function(data) {
  this._storage.setItem(Basket.NS_TRANSPORT, JSON.stringify(data)); 
};


/**
 * Vraci soucet cen vsech produktu a variant v kosiku.
 * 
 * @return {Number}
 */

Basket.prototype.priceProducts = function() {
  var products = this.getAll();
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
  return this.priceProducts() + this.getTransport().price;
};



/**
 * Aktualizuje produkty v ulozisti.
 * 
 * @param {Object} products
 */

Basket.prototype._saveProducts = function(products) {
  this._storage.setItem(Basket.NS_PRODUCTS, JSON.stringify(products));
};


/**
 * @param {Object} product
 * @param {String} id ID produktu.
 * @param {String} variant Varianta produktu.
 */

Basket.prototype._equals = function(product, id, variant) {
  return product.id === id && product.variant === variant;  
};


/**
 * Nastavi udalost storage pro zmenu obsahu kosiku.
 * 
 * Pri zmene jsou upozorneny vsechny ostatni okna prohlizece mimo to, 
 * ve kterém změna proběhla.
 * 
 * @param {window} window
 */

Basket.prototype._setEventStorage = function(window) {
  var basket = this;
  window.addEventListener('storage', function(){ 
    basket.notify.call(basket)
  }, false);    
};