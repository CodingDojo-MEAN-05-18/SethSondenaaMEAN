// Setting up MEAN app
const express = require('express');
const app = express();
const path = require('path');
const port = process.env['PORT'] || 8005;
app.set(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname, 'static/stylesheets')));
//app.use(express.static(path.join(__dirname, 'static/images')));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setting up database
const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/mogooses_db');
mongoose.connection.on('connected', () => console.log('connected to mongo mongooses database'));

const mongooseSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    age: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
} , {
    timestamps: true,
});

const Mongoose = mongoose.model('Mongoose', mongooseSchema);

// Routes
app.get('/', function(req, res) {
    Mongoose.find({})
        .then(mongooses => {
            res.render('index', { mongooses });
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/');
        });
});

app.get('/mongooses/new', function(req, res) {
    res.render('mongoose/new');
});

app.post('/mongooses', function(req, res) {
    Mongoose.create(req.body)
        .then(mongoose => {
            res.redirect('/');
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/');
        });
});

app.get('mongooses/:id', function(req, res) {
    console.log('in id specific route');
    Mongoose.findById(req.params.id)
        .then(mongoose => {
            console.log('found mongoose', mongoose)
            res.render('mongoose/show', { mongoose });
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/');
        });
});



app.listen(port, function(){
    console.log("Listening on port", port);
});