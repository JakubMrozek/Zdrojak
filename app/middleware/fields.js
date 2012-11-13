
/**
 * Vybira parametr fields pro vraceni konkretnich poli v dokumentech.
 * 
 * Priklad pozadavku:
 *     /api/v1/pages?fields=name,title
 *     req.zdrojak.fields = {
 *         name: 1,
 *         title: 1
 *      };
 * 
 * @return {Function}
 */

module.exports = function() {
  return function(req, res, next){
    if (!req.zdrojak) req.zdrojak = {};
      req.zdrojak.fields = {};
      if (req.query.fields) {
        req.query.fields.split(',').forEach(function(field){
        if (field.trim() !== '') {
          req.zdrojak.fields[field] = 1;    
        }
      });
    }
    next();
  };
};
