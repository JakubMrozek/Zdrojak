var config = require(process.cwd() + '/lib/auth/config');
var filter = require(process.cwd() + '/lib/auth/password');

var setCookie = function(res, authToken){
  res.cookie(config.options.tokenName, authToken, {
    maxAge: config.options.cookieMaxAge,
    httpOnly: true
    /*, secure: true*/
  });
};

var createStorageHash = function() {

};

var sendResponse = function(res, user, authToken, next) {
  if (!user) return res.send({});
  setCookie(res, user);
  var response = {};
  createStorageHash(user, function(err, hash){
    if (err) return next(err);
    setCookie(res, authToken);
    response[config.options.tokenName] = hash;
    res.send(response);
  });
};

module.exports = function() {

  return function(req, res, next) {
    var password = req.body.password;

    var condition = {
      email: req.body.email
    };

    config.options.model.findOne(condition, function(err, user){
      if (err) return next(err);
      filter.cryptoX(password, user.salt1, function(err, hash1) {
        if (err) return next(err);
        filter.cryptoZ(hash1, user.salt3, function(err, hash2){
          if (err) return next(err);
          if (hash2 === user.password) {
            sendResponse(res, user, hash1, next);
          } else {
            sendResponse(res, {});
          }
        });
      });
    });

  }
};
