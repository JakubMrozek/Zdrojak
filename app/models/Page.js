var mongoose = require('mongoose');

//schema
var Schema = new mongoose.Schema({
    title: String
  , url: String
  , content: String
});

Schema.statics.findOneByUrl = function(url, cb) {
    Model.findOne({url: url}, cb);
};

var Model = module.exports = mongoose.model('Page', Schema);

