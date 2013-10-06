var config = require(process.cwd() + '/lib/auth/config');
var filter = require(process.cwd() + '/lib/auth/password');
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

    filter.createCookieToken(password, user.cookieTokenSalt, function(err, cookieToken){
      if (err) return next(err);
      filter.createPasswordFromCookieToken(cookieToken, user.passwordSalt, function(err, hash){
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


/**
 * @param {Function} next
 */

var sendSuccess = function(res, user, cookieToken, next) {

  var date = new Date(Date.now() + config.options.maxAge);

  res.cookie(config.options.tokenName, cookieToken, {
    expires: date,
    httpOnly: true
  });

  res.cookie(config.options.cookieUserName, user.id, {
    expires: date,
    httpOnly: true
  });

  var storageToken = filter.createStorageToken(user.storageTokenSalt, date.toString());

  var response = {};
  response[config.options.tokenName] = storageToken;
  res.send(response);

};


/**
 * @param {Function} next
 */

var sendError = function(next) {
  return next(new error.InvalidLoginData());
};
