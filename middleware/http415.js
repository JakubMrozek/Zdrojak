
/**
 * Chyby.
 */
var UnsupportedMediaType = require(process.cwd() + '/lib/error').UnsupportedMediaType;

/**
 * Kontrola, zda byl HTTP pozadavek zaslan v JSON.
 * 
 * Pokud uzivatel zaslal nejaka data metodou POST ci PUT,
 * musi mit Content-Type nastaveny na application/json.
 * Pokud v JSON nejsou, je vracen HTTP kod 415.
 * 
 * @return {Function}
 */

module.exports = function() {
  return function(req, res, next){
    var isPostOrPut = req.method === 'POST' || req.method === 'PUT';
    var isBody = typeof req.body !== 'undefined';
    if (isPostOrPut && isBody && !req.is('json')) {
      return next(new UnsupportedMediaType());
    }
    next();
  };
};
