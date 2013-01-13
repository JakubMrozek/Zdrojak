
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

/**
 * Vyrenderuje layout.
 * 
 * @param {ServerRequest} req
 * @param {ServerResponse} res
 */

function render(req, res){
  res.render('layout', {
    env: app.settings.env
  });  
}

/**
 * Nacteni layoutu a konkretni stranky az u klienta
 */

app.get('/', render);
app.get('/stranky/*', render);
app.get('/vyhledavani/*', render);
app.get('/mobily/*', render);
app.get('/mobil/*', render);
   
module.exports = app;