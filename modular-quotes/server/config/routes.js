const quoteController = require('../controllers/quotes');

module.exports = function(app) {
    app.get('/quotes/index', quoteController.index);
    app.get('/quotes', quoteController.show);
    app.post('/quotes', quoteController.create);
}