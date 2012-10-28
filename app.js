var express = require('express')
  , resource = require('express-resource')
  , config = require('./config')
  , app = express();
  
//konfigurace a spojeni s databazi
config.configure(app);
config.connect(app);

//controllery 
var PageController = require('./app/controllers/PageController');

//modely
var Page = require('./app/models/Page');

//API stranky
app.resource('pages', PageController, {base: '/api/', load: Page.findOneByUrl});
   
module.exports = app;