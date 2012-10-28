var mongoose = require('mongoose');

var fields = {
    title: {type: String, required: true}
  , url: {type: String, required: true}
  , content: {type: String, required: true}
};

var Schema = new mongoose.Schema(fields);

Schema.statics.findOneByUrl = function(url, cb) {
    Model.findOne({url: url}, cb);
};

Schema.statics.inSchema = function(obj) {
    for (var field in obj) {
        if (typeof fields[field] === 'undefined') {
            return false;
        }
    }
    return true;
};

var Model = module.exports = mongoose.model('Page', Schema);

