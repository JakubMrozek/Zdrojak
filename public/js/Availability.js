
/**
 * Informace o dostupnosti produktu.
 * 
 */

function Availability() {
  this._values = [
    {code: 'no', name: 'Není skladem'},
    {code: 'yes', name: 'Skladem'},
    {code: '1day', name: 'Do 24 hodin'},
    {code: '2days', name: 'Do 2 dnů'},
    {code: 'week', name: 'Do týdne'}
  ]
}

/**
 * @return {Object} Seznam vsech dostupnosti. 
 * 
 */

Availability.prototype.all = function() {
  return this._values;    
};


/**
 * @param {String} code
 * @return {Object} 
 * 
 */

Availability.prototype.get = function(code) {
  for (var i = 0; i < this._values.length; ++i) {
    if (this._values[i].code === code) {
      return this._values[i];
    }
  } 
};