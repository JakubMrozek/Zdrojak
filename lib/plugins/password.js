var crypto = require('crypto');
var filter = require(process.cwd() + '/lib/auth/password');

module.exports = exports = function (schema, options) {
  schema.pre('validate', function (next) {

    var field = options.field || 'password';

    if (typeof this[field] === 'undefined') {
      return next();
    }

    password = this[field].trim();

    if (password === '') {
      return next();
    }

    if (!this.isModified(field)) {
      return next();
    }

    filter.cryptoY(password, this.salt1, this.salt2, function(err, result){
      if (err)return next(err);
      this.password = result;
      return next()
    }.bind(this));

  });
};
