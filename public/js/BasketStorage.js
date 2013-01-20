
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


//data o platbe
BasketStorage.NS_PAYMENT = 'Payment';


/**
 * Vlozi novy produkt do kosiku.
 * 
 * @param {String} id ID produktu
 * @param {Object} data
 */

BasketStorage.prototype.add = function(id, data) {
  var products = this.getAll();
  products[id] = data;
  products[id].quantity = 1;
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
 * @return {Object}
 */
BasketStorage.prototype.get = function(id) {
  var products = this.getAll();
  return products[id];
};


/**
 * Vraci vsechny ulozene produkty.
 * 
 * @return {Object}
 */

BasketStorage.prototype.getAll = function() {
  var products = this._storage.getItem(BasketStorage.NS_PRODUCTS);
  
  //v ulozisti uz drive neco bylo.
  if (typeof products === 'string') {
    products = this._unserialize(products);   
  }
  
  //neni ulozen zadny produkt
  if (products === null) {
    products = {};  
  }
  
  return products;
};


/**
 * Upravi mnozstvi zbozi v kosiku u daneho produktu.
 * 
 * @param {String} id ID produktu
 * @param {Number} quantity Aktualizovane mnozstvi zbozi v kosiku.
 */

BasketStorage.prototype.updateQuantity = function(id, quantity) {
  var products = this.getAll();
  products[id].quantity = quantity;
  this._saveProducts(products);
};


/**
 * Odstraneni jedne polozky z kosiku.
 * 
 * @param {String} id ID produktu
 */

BasketStorage.prototype.remove = function(id) {
  var products = this.getAll(); 
  delete products[id];   
  this._saveProducts(products);
};


/**
 * Vyprazdnit cele lokalni uloziste.
 * 
 */

BasketStorage.prototype.clear = function() {
  this._storage.clear();    
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


/**
 * Vrati informace o vybrane platbe.
 * 
 * @return {Object}
 */

BasketStorage.prototype.getPayment = function() {
  var data = this._storage.getItem(BasketStorage.NS_PAYMENT);    
  return this._unserialize(data);
};


/**
 * Uprava zpusobu platby.
 * 
 * @param {Object} data
 */

BasketStorage.prototype.updatePayment = function(data) {
  data = this._serialize(data);
  this._storage.setItem(BasketStorage.NS_PAYMENT, data); 
};
