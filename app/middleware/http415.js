/**
 * Kontrola, zda uzivatel zaslal data ve formatu JSON.
 * 
 * Pokud ne, vratit HTTP kod 415.
 */
module.exports = function() {
  return function(req, res, next){
    var isPostOrPut = req.method === 'POST' || req.method === 'PUT';
    var isBody = req.body && req.body !== '';
    if (isPostOrPut && isBody && !req.is('json')) {
      return next(415);
    }
    next();
  };
};
