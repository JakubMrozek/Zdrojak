var config = require(process.cwd() + '/lib/auth/config');

var hasAccess = function(req, cb) {
  var cookieHash = req.cookies[config.options.tokenName];
  var storageHash = req.get(config.options.httpHeader);

  var cond = {
    storageHash: storageHash,
    cookieHash: cookieHash
  };

  config.options.model.findOne(cond, function(err, doc){
    if (err) return cb(err);
    cb(null, !!doc);
  })
};

module.exports = function() {
  return function(req, res, next) {
    hasAccess(req, function(err, result){
      if (err) return next(err);
      if (result) return next();
      res.send(401);
    });
  }
};
