var mongoose = require('mongoose');

exports.configure = function(app) {
    app.configure('development', function(){
        app.set('db uri', 'mongodb://localhost/zdrojak');
    });
    app.configure('production', function(){
        app.set('db uri', 'mongodb://user:pass@host:port/dbname');
    });
}

exports.connect = function(app) {
    mongoose.connect(app.get('db uri'), function(err) {
        if(err) console.log(err);
    });
}