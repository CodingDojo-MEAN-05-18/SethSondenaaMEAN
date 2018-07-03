// EXPRESS
const express = require('express');
const app = express();

// PATH
const path = require('path');

// PORT
const port = process.env['PORT'] || 8000;

// EJS
app.set(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

// STATIC
app.use(express.static(path.join(__dirname, 'static/stylesheets')));
//app.use(express.static(path.join(__dirname, 'static/images')));

// BODY PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// DATABASE
const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/quotes_db');
mongoose.connection.on('connected', () => console.log('connected to mongo quotes database'));

const quoteSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
    }
} , {
    timestamps: true,
});

const Quote = mongoose.model('Quote', quoteSchema);

// ROUTES
app.get('/', function(req, res){
    res.render('index');
});

app.post('/quotes', function(req, res){
    Quote.create(req.body)
        .then(quote => {
            console.log('quote', quote);
            res.redirect("/quotes");
        })
        .catch(error => {
            console.log(error.errors.name.message);
            res.redirect('/');
        });
});

app.get('/quotes', function(req, res){
    Quote.find({})
        .then(quotes => {
            res.render('quotes', { quotes });
        })
        .catch(error => {
            Object.keys(error.errors).map(key => error.errors[key].message);
        });
});

app.listen(port, function(){
    console.log("Listening on port", port);
});