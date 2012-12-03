
/**
 * Zavislosti modulu.
 */

var express = require('express');
var resource = require('express-resource');
var config = require('./config');
var app = express(); 
  
/**
 * Konfigurace aplikace a spojeni s databazi.
 */

config.configure(app);
config.connect(app);

/**
 * Inicializace vsech controlleru.
 */

var PageController = require('./controllers/PageController');

/**
 * Konfigurace pro jednotliva API
 */

app.resource('pages', PageController, {base: '/api/v1/'});


//TODO docasne reseni pro testy
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/public');
app.get('/pages*', function (req, res) {
  res.render('index', {});    
});

   
module.exports = app;