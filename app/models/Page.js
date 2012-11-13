
/**
 * Zavislosti modulu.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Schema kolekce.
 */

var fields = {
  title: {
    type: String, 
    required: true
  }, 
  url: {
    type: String, 
    required: true
  }, 
  content: {
    type: String, 
    required: true
  }
};

var PageSchema = new Schema(fields);

/**
 * Vybere dokument podle URL.
 * 
 * Vola metodu findOne(), ktere preda podminku pro vyber podle URL.
 * 
 * @param {String} url
 * @param {Function} cb
 */

PageSchema.statics.findOneByUrl = function(url, cb) {
  this.findOne({url: url}, cb);
};

/**
 * Kontroluje, zda jsou predana pole ve schema.
 * 
 * Priklad:
 *   
 *   var fieldsObj = {
 *     url: 1,
 *     content: 1
 *   };
 *   Page.inSchema(fieldsObj); //true
 *   
 *   var fieldsObj = {
 *     url: 1,
 *     neexistuje: 1
 *   };
 *   Page.inSchema(fieldsObj); //false
 * 
 * 
 * @param {Object} obj
 * @return {Boolean}
 */

PageSchema.statics.inSchema = function(obj) {
  for (var field in obj) {
    if (typeof fields[field] === 'undefined') {
      return false;
    }
  }
  return true;
};

module.exports = mongoose.model('Page', PageSchema);

