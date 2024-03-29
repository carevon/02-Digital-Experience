var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
//var mensagem = require('./modulo_teste');
// A engine de view mudou. Será  EJS e para setarmos isso na propriedade do node
// iremos utilizar:
app.set('view engine', 'ejs');
app.set('views', './app/views');


app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(express.static('./app/public'));

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);


module.exports = app;
