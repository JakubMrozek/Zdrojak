
/**
 * Zavislosti modulu.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var createPassword = require('mongoose-password-pbkdf2');
var generateHash = require('mongoose-hash');
var Auth = require(process.cwd() + '/lib/Auth');

/**
 * Schema kolekce.
 */

var fields = {
  email: {
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
  salt: Auth.passwordSalt,
  iterations: 1000,
  keylen: 64
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

