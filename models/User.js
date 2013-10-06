
/**
 * Zavislosti modulu.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var generateHash = require('mongoose-hash');
var config = require(process.cwd() + '/lib/auth/config');
var password = require(process.cwd() + '/lib/auth/plugins/password');

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
  cookieTokenSalt: {
    type: String,
    required: true
  },
  storageTokenSalt: {
    type: String,
    required: true
  },
  passwordSalt: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
};

var UserSchema = new Schema(fields);

UserSchema.plugin(generateHash, {
  field: 'cookieTokenSalt',
  size: 64
});

UserSchema.plugin(generateHash, {
  field: 'storageTokenSalt',
  size: 64
});

UserSchema.plugin(generateHash, {
  field: 'passwordSalt',
  size: 64
});

UserSchema.plugin(password, {
  field: 'password'
});

module.exports = mongoose.model('User', UserSchema);

