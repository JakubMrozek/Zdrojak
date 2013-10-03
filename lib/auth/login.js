var filter = require('password-filter');
var config = require(process.cwd() + '/lib/auth/config');

var setCookie = function(res, user){
  res.cookie(config.options.tokenName, user.cookieHash, {
    maxAge: config.options.cookieMaxAge,
    httpOnly: true
    /*, secure: true*/
  });
};

var sendResponse = function(res, user) {
  if (!user) return res.send({});
  setCookie(res, user);
  var response = {};
  response[config.options.tokenName] = user.storageHash;
  res.send(response);
};

module.exports = function() {

  return function(req, res, next) {

    var email = req.body.email;
    var password = req.body.password;

    var options = {
      salt: config.options.passwordSalt,
      iterations: config.options.passwordIterations,
      keylen: config.options.passwordKeylen
    };

    filter(password, options, function(err, password){
      if (err) return next(err);

      var condition = {
        email: email,
        password: password
      };

      config.options.model.findOne(condition, function(err, doc){
        if (err) return next(err);
        sendResponse(res, doc);
      });
    });

  }
};
