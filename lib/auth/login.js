var config = require(process.cwd() + '/lib/auth/config');
var crypt = require(process.cwd() + '/lib/auth/crypt');
var error = require(process.cwd() + '/lib/error');


/**
 * @returns {Function}
 */

module.exports = function() {
  return login;
};


/**
 *
 * @param {ServerRequest} req
 * @param {ServerResponse} res
 * @param {Function} next
 */

var login = function(req, res, next) {
  var password = req.body.password;

  var condition = {
    email: req.body.email
  };

  config.options.model.findOne(condition, function(err, user){
    if (err) return next(err);
    if (!user) return sendError(next);

    crypt.createCookieToken(password, user.cookieTokenSalt, function(err, cookieToken){
      if (err) return next(err);
      crypt.createPasswordFromCookieToken(cookieToken, user.passwordSalt, function(err, hash){
        if (err) return next(err);

        if (user.password === hash) {
          sendSuccess(res, user, cookieToken, next);
        } else {
          sendError(next);
        }

      });
    });

  });
};

var getDate = function() {}


/**
 * @param {Function} next
 */

var sendSuccess = function(res, user, cookieToken, next) {

  var expires = Date.now() + user.tokenMaxAge * 1000;

  crypt.createStorageToken(user.storageTokenSalt, expires, function(err, random){
    if (err) return next(err);

    var cookie = {
      token: cookieToken,
      user: user.id,
      randomString: random.str,
      expires: expires
    };

    res.cookie(config.options.tokenName, cookie, {
      expires: new Date(expires),
      httpOnly: true,
      signed: true
    });

    var response = {};
    response[config.options.tokenName] = random.hash;
    res.send(response);
  });

};


/**
 * @param {Function} next
 */

var sendError = function(next) {
  return next(new error.InvalidLoginData());
};
