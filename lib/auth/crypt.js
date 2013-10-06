var moment = require('moment');
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


var createStorageToken = function(userStorageSalt, randomString, date) {
  var token = crypto.createHash('sha256')
      .update(config.options.systemStorageSalt)
      .update(userStorageSalt)
      .update(randomString)
      .update(String(date))
      .digest('hex');
  return token;
};


/**
 *
 * @param {String} passwordPlain
 * @param {Number} date
 * @param {Function} cb
 */

exports.createStorageToken = function(userStorageSalt, date, cb) {
  crypto.randomBytes(config.options.randomBytesSize, function(err, buf) {
    if (err) return cb(err);
    var randomString = buf.toString('hex');
    var randomHash = createStorageToken(userStorageSalt, randomString, date);
    return cb(null, {
      str: randomString,
      hash: randomHash
    })
  });
};


/**
 *
 * @param {Number} expires
 * @param {Boolean}
 */

exports.isValidDate = function(expires) {
  var today = Date.now();
  return expires >= today;
};


/**
 *
 * @param {String} passwordPlain
 * @param {Number} date
 * @param {Function} cb
 */

exports.isValidStorageToken = function(storageToken, userStorageSalt, randomString, date) {
  var result = createStorageToken(userStorageSalt, randomString, date);
  var result = storageToken === result;
  if (!result) return false;
  return this.isValidDate(date);
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

