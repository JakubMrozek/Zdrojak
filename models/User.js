
/**
 * Zavislosti modulu.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var generateHash = require('mongoose-hash');
var config = require(process.cwd() + '/lib/auth/config');
var password = require(process.cwd() + '/lib/plugins/password');

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
  salt1: {
    type: String,
    required: true
  },
  salt2: {
    type: String,
    required: true
  },
  salt3: {
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
  field: 'salt1',
  size: 64
});

UserSchema.plugin(generateHash, {
  field: 'salt2',
  size: 64
});

UserSchema.plugin(generateHash, {
  field: 'salt3',
  size: 64
});

UserSchema.plugin(password, {
  field: 'password'
});

module.exports = mongoose.model('User', UserSchema);

