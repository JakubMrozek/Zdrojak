var Auth = require(process.cwd() + '/lib/Auth');

module.exports = function() {
  return function(req, res, next) {
    Auth.hasAccess(req, function(err, result){
      if (err) return next(err);
      if (result) return next();
      res.send(401);
    });
  }
};
