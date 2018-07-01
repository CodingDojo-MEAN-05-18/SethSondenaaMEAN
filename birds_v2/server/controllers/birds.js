// Controllers
const Bird = require('mongoose').model('Bird');

module.exports = {
    index(req, res) { 
        Bird.find({})
        .then(birds => {
            res.render('bird/index', { birds });
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/birds');
        });
    },
    show(req, res) { 
        Bird.findById(req.params.id)
        .then(bird => {
            res.render('bird/show', { bird });
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/birds');
        });
    },
    edit(req, res) { 
        Bird.findById(req.params.id)
        .then(bird => {
            res.render('bird/update', { bird });
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/birds');
        });
    },
    new(req, res) { 
        res.render('bird/new');
    },
    update(req, res) { 
        Bird.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect('/birds');
        })
        .catch(error => {
            console.log(error);
            res.redirect('/birds');
        });
    },
    create(req, res) { 
        Bird.create(req.body)
        .then(bird => {
            console.log("created", bird);
            res.redirect('/birds');
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/birds');
        });
    },
    destroy(req, res) { 
        Bird.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/birds');
        })
        .catch(error => {
            console.log(error);
            res.redirect('/birds');
        });
    },
};