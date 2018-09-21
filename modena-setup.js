const { configureEndpoints } = require('modena');

module.exports = configureEndpoints(router => {
	router.get('/', (req, res, next) => res.render('index'));
    router.get('/inici', (req, res, next) => res.render('index'));
    router.get('/cates', (req, res, next) => res.render('cates'));
    router.get('/contacte', (req, res, next) => res.render('contacte'));
    router.get('/cuina', (req, res, next) => res.render('cuina'));
    router.get('/descobreix', (req, res, next) => res.render('descobreix'));
    router.get('/reservar', (req, res, next) => res.render('reservar'));
});
