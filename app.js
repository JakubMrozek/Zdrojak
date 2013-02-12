
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

function render(template) {
  template = template || 'layout';
  return function(req, res){
    res.render(template, {
      env: app.settings.env
    });  
  }
}

/**
 * Nacteni layoutu a konkretni stranky az u klienta
 */

app.get('/', render());
app.get('/info/*', render());
app.get('/vyhledavani/*', render());
app.get('/mobily/*', render());
app.get('/mobil/*', render());
app.get('/kosik', render());
app.get('/zakaznicke-udaje', render());
app.get('/potvrzeni', render());   
app.get('/admin', render('admin/layout'));   
module.exports = app;