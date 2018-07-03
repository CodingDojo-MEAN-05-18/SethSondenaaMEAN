const Quote = require('mongoose').model('Quote');

module.exports = {
    index(req, res) {
        res.render('quotes/index');
    },
    show(req, res) {
        Quote.find({})
            .then(quotes => {
                res.render('quotes/show', { quotes });
            })
            .catch(error => {
                console.log(error.errors.name.message);
                res.redirect('/');
            });
    }, create(req, res) {
        Quote.create(req.body)
            .then(quote => {
                console.log(req.body);
                console.log('quote', quote);
                res.redirect("/quotes");
            })
            .catch(error => {
                console.log(error.errors.name.message);
                res.redirect('/');
            });
    },
}