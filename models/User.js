
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
  }
};

var UserSchema = new Schema(fields);


UserSchema.pre('validate', function(next){
  next();
});

module.exports = mongoose.model('Page', PageSchema);

