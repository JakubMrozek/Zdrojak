var express  = require('express')
  , resource = require('express-resource')
  , app = express();

app.resource('pages', require('./app/pages'));
app.listen(process.env.PORT || 5000);