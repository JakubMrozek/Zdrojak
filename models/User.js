
/**
 * Zavislosti modulu.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var createPassword = require('mongoose-password-pbkdf2');
var generateHash = require('mongoose-hash');
var authConfig = require(process.cwd() + '/lib/auth/config');

/**
 * Schema kolekce.
 */

var fields = {
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  storageHash: {
    type: String,
    required: true
  },
  cookieHash: {
    type: String,
    required: true
  },
};

var UserSchema = new Schema(fields);

UserSchema.plugin(createPassword, {
  field: 'password',
  salt: authConfig.options.passwordSalt,
  iterations: authConfig.options.passwordIterations,
  keylen: authConfig.options.passwordKeylen
});

UserSchema.plugin(generateHash, {
  field: 'storageHash',
  size: 64
});

UserSchema.plugin(generateHash, {
  field: 'cookieHash',
  size: 64
});

module.exports = mongoose.model('User', UserSchema);

