
/**
 * Informace o stavech objednavky.
 * 
 */

function Status() {
  this._status = [
    {code: 'pending', name: 'Zpracovává se'},
    {code: 'completed', name: 'Dokončeno'},
    {code: 'canceled', name: 'Zrušeno'}
  ]
}

/**
 * @return {Object} Seznam vsech dostupnych stavu objednavek. 
 * 
 */

Status.prototype.all = function() {
  return this._status;    
};