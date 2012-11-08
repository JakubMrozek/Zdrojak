var express = require('express');
var mongoose = require('mongoose');

exports.configure = function(app) {
  app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(process.cwd() + '/public'));
    app.use(require('./app/middleware/fields')());
    app.use(app.router);
    app.use(require('./app/middleware/error')());
  });
  app.configure('development', function(){
    app.set('db uri', 'mongodb://localhost/zdrojak');
  });
  app.configure('production', function(){
    app.set('db uri', 'mongodb://user:pass@host:port/dbname');
  });
  app.configure('test', function(){
    app.set('db uri', 'mongodb://localhost/zdrojaktest');
  }); 
};

exports.connect = function(app) {
  mongoose.connect(app.get('db uri'), function(err) {
    if(err) console.log(err);
  });  
};