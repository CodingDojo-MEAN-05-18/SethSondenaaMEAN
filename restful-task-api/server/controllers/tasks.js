const Task = require('mongoose').model('Task');

module.exports = {
    index(req, res) { 
        Task.find({})
            .then(tasks => {
                res.json(tasks);
            })
            .catch(err => {
                res.json(err);
            });
    },
    show(req, res) { 
        Task.findOne({_id: req.params.id})
            .then(task => {
                console.log('found task', task);
                res.json(task);
            })
            .catch(err => {
                res.json(err);
            });
    },
    update(req, res) { 
        Task.findByIdAndUpdate({_id: req.params.id})
            .then(task => {
                console.log('updated', task);
                res.redirect('/');
            })
            .catch(err => {
                res.json(err);
            });
    },
    create(req, res) { 
        Task.create()
            .then(task => {
                console.log('created', task);
                res.redirect('/');
            })
            .catch(err => {
                res.json(err);
            });
    },
    destroy(req, res) { 
        Task.findByIdAndRemove({_id: req.params.id})
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                res.json(err);
            });
    },
};