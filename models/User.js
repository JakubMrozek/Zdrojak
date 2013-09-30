
/**
 * Zavislosti modulu.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
  hashStorage: {
    type: String,
    required: true
  },
  hashCookie: {
    type: String,
    required: true
  }
};

var UserSchema = new Schema(fields);

UserSchema.pre('validate', function(next){
  next();
});

UserSchema.statics.findForLogin = function(email, password, cb) {
  this.findOne({email: email, password: password}, cb);
};

module.exports = mongoose.model('User', UserSchema);

