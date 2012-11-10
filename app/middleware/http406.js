/**
 * Kontrola, zda muzeme vratit data v JSON
 * 
 * Pokud ne, vratit HTTP kod 406.
 */
module.exports = function() {
  return function(req, res, next){
    if (!req.accepts('json')) {
        return next(406);
    }
    next();
  };
};
