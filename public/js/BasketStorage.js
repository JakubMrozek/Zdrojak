
/**
 * Implementace informaci o nakupu zakaznika pres HTML5 local storage.
 * 
 */

function BasketStorage() {
  this._storage = window.localStorage;
}


//data o produktech
BasketStorage.NS_PRODUCTS = 'Products';


//data o zakaznikovi
BasketStorage.NS_CUSTOMER = 'Customer';


//data o doprave
BasketStorage.NS_TRANSPORT = 'Transport';


/**
 * Vlozi novy produkt do kosiku.
 * 
 * @param {Object} product
 */

BasketStorage.prototype.add = function(product) {
  var products = this.getAll();
  product.quantity = 1;
  products.push(product);
  this._saveProducts(products);
};


/**
 * Aktualizuje produkty v ulozisti.
 * 
 * @param {Object} products
 */

BasketStorage.prototype._saveProducts = function(products) {
  products = this._serialize(products);
  this._storage.setItem(BasketStorage.NS_PRODUCTS, products);
};


/**
 * Prevede objekt na retezec.
 * 
 * @param {Object} data
 * @return {String}
 */

BasketStorage.prototype._serialize = function(data) {
  return JSON.stringify(data);      
};


/**
 * Prevede retezec na objekt.
 * 
 * @param {String} str
 * @return {Object}
 */

BasketStorage.prototype._unserialize = function(str) {
  return JSON.parse(str)      
};


/**
 * Vraci jeden produkt podle ID.
 * 
 * @param {String} id ID produktu.
 * @param {String} variant Varianta produktu.
 * @return {Object}
 */
BasketStorage.prototype.get = function(id, variant) {
  var products = this.getAll();
  for (var i = 0; i < products.length; ++i) {
    if (products[i].id === id && products[i].variant === variant) {
      return products[i];    
    }    
  }
};


/**
 * Vraci true, pokud je produkt jiz v kosiku. Jinak false.
 * 
 * @param {String} id ID produktu.
 * @param {String} variant Varianta produktu.
 * @return {Boolean}
 */
BasketStorage.prototype.exist = function(id, variant) {
  var products = this.getAll();
  for (var i = 0; i < products.length; ++i) {
    if (products[i].id === id && products[i].variant === variant) {
      return true; 
    }    
  }
  return false;
};


/**
 * Vraci vsechny ulozene produkty.
 * 
 * @return {Array}
 */

BasketStorage.prototype.getAll = function() {
  var products = this._storage.getItem(BasketStorage.NS_PRODUCTS);
  
  //v ulozisti uz drive neco bylo.
  if (typeof products === 'string') {
    products = this._unserialize(products);   
  }
  
  //neni ulozen zadny produkt
  if (products === null) {
    products = [];  
  }
  
  return products;
};


/**
 * Upravi mnozstvi zbozi v kosiku u daneho produktu.
 * 
 * @param {Number} quantity Aktualizovane mnozstvi zbozi v kosiku.
 * @param {String} id ID produktu
 * @param {String} variant Varianta produktu.
 * @return {Boolean} 
 */

BasketStorage.prototype.updateQuantity = function(quantity, id, variant) {
  var products = this.getAll();
  for (var i = 0; i < products.length; ++i) {
    if (products[i].id === id && products[i].variant === variant) {
      products[i].quantity = quantity;
      this._saveProducts(products);
      return true;
    }    
  }
  return false;
};


/**
 * Odstraneni jedne polozky z kosiku.
 * 
 * @param {String} id ID produktu
 * @param {String} variant Varianta produktu.
 */

BasketStorage.prototype.remove = function(id, variant) {
  var oldProducts = this.getAll(); 
  var newProducts = [];
  for (var i = 0; i < oldProducts.length; ++i) {
    if (oldProducts[i].id !== id || oldProducts[i].variant !== variant) {
      newProducts.push(oldProducts[i]);
    }    
  }   
  this._saveProducts(newProducts);
};


/**
 * Vyprazdnit cele lokalni uloziste.
 * 
 */

BasketStorage.prototype.clear = function() {
  this._storage.removeItem(BasketStorage.NS_PRODUCTS);  
  this._storage.removeItem(BasketStorage.NS_CUSTOMER);  
  this._storage.removeItem(BasketStorage.NS_TRANSPORT);  
}


/**
 * Vrati udaje o zakaznikovi.
 * 
 * @return {Object}
 */

BasketStorage.prototype.getCustomer = function() {
  var data = this._storage.getItem(BasketStorage.NS_CUSTOMER);    
  return this._unserialize(data);
};


/**
 * Uprava uzivatelskych udaju.
 * 
 * @param {Object} data
 */

BasketStorage.prototype.updateCustomer = function(data) {
  data = this._serialize(data);
  this._storage.setItem(BasketStorage.NS_CUSTOMER, data);    
};


/**
 * Vrati informace o vybrane doprave.
 * 
 * @return {Object}
 */ 

BasketStorage.prototype.getTransport = function() {
  var data = this._storage.getItem(BasketStorage.NS_TRANSPORT);    
  return this._unserialize(data);
};


/**
 * Uprava zpusobu dopravy.
 * 
 * @param {Object} data
 */

BasketStorage.prototype.updateTransport = function(data) {
  data = this._serialize(data);
  this._storage.setItem(BasketStorage.NS_TRANSPORT, data); 
};
