
/**
 * Informace o doprave.
 * 
 */

function Transport() {
  this._methods = {
    personal: {
      code: 'personal',
      price: 0,
      name: 'Osobní převzetí a platba hotově či kartou při převzetí (zdarma)'
    },
    post: {
      code: 'post',
      price: 79,
      name: 'Dobírka a platba při převzetí (79 Kč)'
    }
  }
}

/**
 * @return {Object} Seznam vsech dostupnych metod dopravy. 
 * 
 */

Transport.prototype.methods = function() {
  return this._methods;    
};


/**
 * @param {String} code Kod dopravy.
 * @return {Object} Informace o jedne metode dopravy.
 * 
 */

Transport.prototype.get = function(code) {
  return this._methods[code];    
};