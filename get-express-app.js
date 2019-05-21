const express = require('express');
const { join } = require('path');

module.exports = () => {
	const app = express();
	app.set('view engine', 'ejs');
	app.use('/', express.static(join(__dirname, 'public')));
	app.get('/', (req, res, next) => res.render('index'));
    app.get('/inici', (req, res, next) => res.render('index'));
    app.get('/cates', (req, res, next) => res.render('cates'));
    app.get('/contacte', (req, res, next) => res.render('contacte'));
    app.get('/cuina', (req, res, next) => res.render('cuina'));
    app.get('/descobreix', (req, res, next) => res.render('descobreix'));
    app.get('/reservar', (req, res, next) => res.render('reservar'));
	return app;
};
