var express = require('express')
  , resource = require('express-resource')
  , config = require('./config')
  , app = express();
  
//konfigurace a spojeni s databazi
config.configure(app);
config.connect(app);

//controllery (inicializace modelu je v controllerech)
var PageController = require('./app/controllers/PageController');

//API stranky
app.resource('pages', PageController, {base: '/api/'});
   
module.exports = app;