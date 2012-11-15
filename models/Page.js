
/**
 * Zavislosti modulu.
 */

var mongoose = require('mongoose');
var url = require(process.cwd() + '/lib/filters/url');
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
 * Vygeneruje URL pro stranku z titulku.
 * 
 * Pouze pokud URL jiz neexistuje.
 * Priklad:
 * 
 *     var page = new Page();
 *     page.name = 'Platebni podminky';
 *     page.content = 'Lorem ipsum set dolorem';
 *     page.save(); 
 *     
 *     //vznikne polozka page.url s hodnotou 'platebni-podminky'
 *
 * @param {Page} page
 */

function addUrl(page) {
  if (typeof page.url === 'undefined') {
    page.url = url(page.title);    
  }
}

/**
 * Udalosti pred validaci.
 * 
 * Akce:
 * - pokud neexistuje URL, vygeneruje se z titulku
 * 
 * @param {Function} next
 */

PageSchema.pre('validate', function(next){
  addUrl(this);
  next();
});


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

