
/**
 * Chyby.
 */
var NotAcceptable = require(process.cwd() + '/lib/error').NotAcceptable;

/**
 * Kontrola, zda je schopen uzivatel zpracovat HTTP odpoved v JSON.
 * 
 * Jestlize uzivatel nezadal hlavicku Accept, pocitame s tim, 
 * ze muze zpracovat obsah v JSON. Pokud hlavicku Accept zaslal
 * a JSON zpracovat nemuze, vratime HTTP kod 406. 
 * 
 * @return {Function}
 */

module.exports = function() {
  return function(req, res, next){
    if (!req.accepts('json')) {
        return next(new NotAcceptable());
    }
    next();
  };
};
