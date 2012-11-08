var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fields = {
  title: {type: String, required: true}, 
  url: {type: String, required: true}, 
  content: {type: String, required: true}
};

var PageSchema = new Schema(fields);

PageSchema.statics.findOneByUrl = function(url, cb) {
  this.findOne({url: url}, cb);
};

PageSchema.statics.inSchema = function(obj) {
  for (var field in obj) {
    if (typeof fields[field] === 'undefined') {
      return false;
    }
  }
  return true;
};

module.exports = mongoose.model('Page', PageSchema);

