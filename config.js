var express = require('express')
  , mongoose = require('mongoose');

exports.configure = function(app) {
    app.configure(function(){
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.static(process.cwd() + '/public'));
        app.use(app.router);
    });
    app.configure('development', function(){
        app.set('db uri', 'mongodb://localhost/zdrojak');
    });
    app.configure('production', function(){
        app.set('db uri', 'mongodb://user:pass@host:port/dbname');
    });
    app.configure('test', function(){
        //app.set('db uri', 'mongodb://localhost/zdrojaktest');
    });
}

exports.connect = function(app) {
    var uri = app.get('db uri');
    if (uri) {
        mongoose.connect(uri, function(err) {
            if(err) console.log(err);
        });        
    }
}