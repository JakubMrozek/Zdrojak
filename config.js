
/**
 * Zavislosti modulu.
 */

var express = require('express');
var mongoose = require('mongoose');

/**
 * Konfigurace pro ruzna prostredi.
 * 
 * @param {Object} app
 */

exports.configure = function(app) {
  app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(process.cwd() + '/public'));
    app.use(express.favicon());
    app.use(require('./app/middleware/http406')());
    app.use(require('./app/middleware/http415')());
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

/**
 * Inicializace spojeni s databazi.
 * 
 * @param {Object} app
 */

exports.connect = function(app) {
  mongoose.connect(app.get('db uri'), function(err) {
    if(err) console.log(err);
  });  
};