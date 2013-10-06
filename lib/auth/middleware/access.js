var config = require(process.cwd() + '/lib/auth/config');
var filter = require(process.cwd() + '/lib/auth/password');

var hasAccess = function(req, cb) {
  var cookie = req.cookies[config.options.tokenName];
  var storage = req.get(config.options.httpHeader);

  if (!(storage && cookie && cookie.user && cookie.token && cookie.randomString)) {
    return cb(null, false);
  }

  config.options.model.findOne({_id: cookie.user}, function(err, user){
    if (err) return cb(err);
    if (!user) return cb(null, false);

    if (!filter.checkStorageToken(storage, user.storageTokenSalt, cookie.randomString)) {
      return cb(null, false);
    }

    filter.createPasswordFromCookieToken(cookie.token, user.passwordSalt, function(err, passwordToken){
      if (err) return cb(err);
      var result = passwordToken === user.password;
      return cb(null, result);
    });
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
