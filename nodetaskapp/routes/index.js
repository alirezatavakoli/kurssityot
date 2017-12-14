var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there' });
});

module.exports = router;