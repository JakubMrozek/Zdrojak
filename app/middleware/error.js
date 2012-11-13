//
// Vybira parametr fields pro vraceni konkretnich poli v dokumentech.
// 
// Priklad pozadavku:
//     /api/v1/pages?fields=name,title
//     req.zdrojak.fields = {
//         name: 1,
//         title: 1
//      };
//
// @return {Function}
//
module.exports = function() {
  return function(err, req, res, next){
    if (typeof(err) === 'number') {
      return res.send(err);
    } 
        
    if (err.name && err.name === 'ValidationError') {
      return res.send(400);
    }
        
    next(err);
  };
};
