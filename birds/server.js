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
mongoose.connect('mongodb://localhost/bird_datavase');
mongoose.connection.on('connected', () => console.log('connected to mongo bird database'));

const birdSchema = new Schema({
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
    type: {
        type: String,
        required: true,
        default: 'unknown',
    }
} , {
    timestamps: true,
});

const Bird = mongoose.model('Bird', birdSchema);

// Routes
app.get('/', function(req, res) {
    Bird.find({})
        .then(birds => {
            res.render('index', { birds });
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/');
        });
});

app.get('/birds/new', function(req, res) {
    res.render('bird/new');
});

app.post('/birds', function(req, res) {
    Bird.create(req.body)
        .then(bird => {
            console.log("created", bird);
            res.redirect('/');
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/');
        });
});

app.get('birds/:id', function(req, res) {
    console.log('in id specific route', req.params.id);
    Bird.findById(req.params.id)
        .then(bird => {
            console.log('found bird', bird)
            res.render('bird/show', { bird });
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/');
        });
});



app.listen(port, function(){
    console.log("Listening on port", port);
});