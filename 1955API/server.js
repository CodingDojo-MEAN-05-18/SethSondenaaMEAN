const express = require('express');
const app = express();
const path = require('path');
const port = process.env['PORT'] || 8000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/quotes_db');
mongoose.connection.on('connected', () => console.log('connected to mongo quotes database'));

const personSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
} , {
    timestamps: true,
});

const Person = mongoose.model('Person', personSchema);

app.get('/', function(req, res) {
    Person.find({})
        .then(persons => {
            res.json(persons);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

app.get('/new/:name', function(req, res) {
    Person.create({name:req.params.name})
        .then(person => {
            console.log(person.name, 'added');
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

app.get('/remove/:name', function(req, res) {
    Person.findOne({name:req.params.name})
        .then(person => {
            console.log('deleting', person.name);
            Person.findByIdAndRemove(person._id)
                .then(() => {
                    console.log('deleted');
                    res.redirect('/');
                })
                .catch(err => {
                    console.log(err);
                    res.json(err);
                });
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

app.get('/:name', function(req, res) {
    Person.findOne({name:req.params.name})
        .then(person => {
            console.log('found', person)
            res.json(person);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

app.listen(port, function(){
    console.log("Listening on port", port);
});