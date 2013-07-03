
/**
 * Informace o stavech objednavky.
 * 
 */

function Status() {
  this._status = [
    {code: 'pending', name: 'Zpracovává se'},
    {code: 'completed', name: 'Dokončeno'},
    {code: 'cancelled', name: 'Zrušeno'}
  ]
}

/**
 * @return {Object} Seznam vsech dostupnych stavu objednavek. 
 * 
 */

Status.prototype.all = function() {
  return this._status;    
};


/**
 * @param {String} code
 * @return {Object} 
 * 
 */

Status.prototype.get = function(code) {
  for (var i = 0; i < this._status.length; ++i) {
    if (this._status[i].code === code) {
      return this._status[i];
    }
  } 
};