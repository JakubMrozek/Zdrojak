var crypto = require('crypto');
var filter = require('password-filter');
var config = require(process.cwd() + '/lib/auth/config');

var cryptoX = function(password, userSalt, cb) {
  var options = {
    salt: config.options.salt1 + '|' + userSalt,
    iterations: config.options.iterations1,
    keylen: config.options.keylen1
  };
  filter(password, options, cb);
};

var cryptoY = function(password, userSalt1, userSalt2, cb) {
  var options = {
    salt: config.options.salt3 + '|' + userSalt2,
    iterations: config.options.iterations3,
    keylen: config.options.keylen3
  };
  cryptoX(password, userSalt1, function(err, hash){
    if (err) return cb(err);
    filter(hash, options, cb);
  });
};

var cryptoZ = function(hash1, userSalt2, cb) {
  var options = {
    salt: config.options.salt3 + '|' + userSalt2,
    iterations: config.options.iterations3,
    keylen: config.options.keylen3
  };
  filter(hash1, options, cb);
};


exports.cryptoX = cryptoX;
exports.cryptoY = cryptoY;
exports.cryptoZ = cryptoZ;
