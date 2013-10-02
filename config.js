
/**
 * Zavislosti modulu.
 */

var express = require('express');
var mongoose = require('mongoose');
var Auth = require('./lib/Auth');

/**
 * Konfigurace pro ruzna prostredi.
 *
 * @param {Object} app
 */

exports.configure = function(app) {
  Auth.setCookieSalt('5GiNxOayeGDEIImNyzsEDspRJLhaIAZsG9vMqnjlXnTgX2ELzk');
  Auth.setStorageSalt('Kjl6LVkXE2XTw3TE84lP5sebXkNPwAOb6Y9ess7ua2MQim6Wv1');
  Auth.setPasswordSalt('nT.31_F!8z.Q[ of^$PEmWSddddY&cG%n#L|]}');
  Auth.setModel(require('./models/User'));

  app.configure(function(){
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.static(process.cwd() + '/public'));
    app.use(express.favicon());
    app.use(require('./middleware/http406')());
   // app.use(require('./middleware/http415')());
    app.use(require('./middleware/fields')());
    app.use(app.router);
    app.use(require('./middleware/error')());
  });
  app.configure('development', function(){
    app.set('db uri', 'mongodb://localhost/zdrojak');
    app.use(express.static(process.cwd() + '/test/frontend'));
  });
  app.configure('production', function(){
    app.set('db uri', 'mongodb://user:pass@host:port/dbname');
  });
  app.configure('test', function(){
    app.set('db uri', 'mongodb://localhost/zdrojaktest');
    app.use(express.static(process.cwd() + '/test/frontend'));
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
