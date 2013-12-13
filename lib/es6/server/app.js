var express = require('express');
var express_hbs  = require('express3-handlebars');

var app = express();

var hbs = express_hbs.create({
  defaultLayout: 'main',
  extname: '.hbs'
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.get('/', function(request, response){
  response.render('home');
});

export default = app;