var express = require('express')
  , resource = require('express-resource')
  , mongoose = require('mongoose')
  , config = require('./config')
  , app = express();
  
//konfigurace a spojeni s databazi
config.configure(app);
config.connect(app);

//controllery 
var PageController = require('./app/controllers/PageController');

//modely
var Page = require('./app/models/Page');

//middleware
var error = require('./app/middleware/error');

//API stranky
app.resource('pages', PageController, {base: '/api/', load: Page.findOneByUrl});

//zpracovani chyby
app.use(error());
   
module.exports = app;