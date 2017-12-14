var express = require('express');
var router = express.Router();
var app = express();

app.get('/login', function (req, res) {
res.render('login_form', { title: 'Kirjaudu' });
});