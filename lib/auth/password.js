var crypto = require('crypto');
var filter = require('password-filter');
var config = require(process.cwd() + '/lib/auth/config');


/**
 *
 * @param {String} systemSalt
 * @param {String} userSalt
 * @return {String}
 */

exports.createSalt = function(systemSalt, userSalt) {
  return systemSalt + '|' + userSalt;
};


/**
 *
 * @param {String} passwordPlain
 * @param {String} userCookieSalt
 * @param {Function} cb
 */

exports.createCookieToken = function(passwordPlain, userCookieSalt, cb) {
  var salt = this.createSalt(config.options.systemCookieSalt, userCookieSalt);

  var options = {
    salt: salt,
    iterations: config.options.cookieIterations,
    keylen: config.options.cookieKeylen
  };

  filter(passwordPlain, options, cb);
};


/**
 *
 * @param {String} passwordPlain
 * @param {String} userCookieSalt
 * @param {String}
 */

exports.createStorageToken = function(userStorageSalt, date) {
  return crypto.createHash('sha256')
    .update(config.options.systemStorageSalt)
    .update(userStorageSalt)
    .update(date)
    .digest('hex');
};


/**
 *
 * @param {String} passwordPlain
 * @param {String} userCookieSalt
 * @param {String} userPasswordSalt
 * @param {Function} cb
 * @return {String}
 */

exports.createPassword = function(passwordPlain, userCookieSalt, userPasswordSalt, cb) {
  this.createCookieToken(passwordPlain, userCookieSalt, function(err, cookieToken){
    if (err) return cb(err);
    this.createPasswordFromCookieToken(cookieToken, userPasswordSalt, cb)
  }.bind(this));
};


/**
 *
 * @param {String} cookieToken
 * @param {String} userPasswordSalt
 * @param {Ftring} cb
 */

exports.createPasswordFromCookieToken = function(cookieToken, userPasswordSalt, cb) {
  var salt = this.createSalt(config.options.systemPasswordSalt, userPasswordSalt);

  var options = {
    salt: salt,
    iterations: config.options.passwordIterations,
    keylen: config.options.passwordKeylen
  };

  filter(cookieToken, options, cb);
};

