// Setting up MEAN app
const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const port = process.env['PORT'] || 8005;

app.set(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname, 'static/stylesheets')));
//app.use(express.static(path.join(__dirname, 'static/images')));

const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('trust proxy', 1);
app.use(session({
    secret: 'shhthisissecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000},
}));
app.use(flash());

// Setting up database
const mongoose = require('mongoose');
const { Schema } = mongoose;
const validate = require('mongoose-validator');
mongoose.connect('mongodb://localhost/login');
mongoose.connection.on('connected', () => console.log('connected to mongo login database'));

const nameValidator = [
    validate({
        validator:'isLength',
        arguments: [2, 50],
        message: 'Name and email should contain between {ARGS[0]} and {ARGS[0]} characters',

    })
];

const passValidator = [
    validate({
        validator:'isLength',
        arguments: [8, 50],
        message: 'Password should contain between {ARGS[0]} and {ARGS[0]} characters',

    })
];

const bdValidator = [
    validate({
        validator:'isLength',
        arguments: [1, 10],
        message: 'Please enter a birthday',

    })
];

const userSchema = new Schema({
    first_name: {
        type: String,
        validate: nameValidator,
    },
    last_name: {
        type: String,
        validate: nameValidator,
    }, birthday: {
        type: String,
        validate: bdValidator,
    }, email: {
        type: String,
        validate: nameValidator,
    }, password: {
        type: String,
        validate: passValidator,
    }
}, {
    timestamps: true,
});

const User = mongoose.model('userSchema', userSchema);

// Routes
app.get('/', function(req, res){
    res.render('index');
});

app.post('/register', function(req, res) {
    User.findOne({email: req.body.email})
        .then(user => {
            concole.log(user);
            req.flash('registration', 'Email already in use. Please use a different email address.');
            res.redirect('/');
        })    
        .catch(() => {
                bcrypt.hash(req.body.password, 10)
                    .then(hash => {
                        User.create(req.body)
                            .then(user => {
                                user.password = hash;
                                req.session.user_id = user.id;
                                res.redirect('/passed');
                            })
                            .catch(err => {
                                for (const key in err.errors) {
                                    req.flash('registration', err.errors[key].message);
                                }
                                res.redirect('/');
                            });
                    })
                    .catch(err => {
                        console.log(err);
                        redirect('/');
                    });                
        });            
});

app.get('/passed', function(req, res) {
    User.findById(req.session.user_id)
        .then(user => {
            res.render('home', { user });
        })
});

app.post('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});

app.post('/login', function(req, res) {
    User.findOne({email: req.body.email})
        .then(user => {
            bcrypt.compare(req.body.password, user.password)
                .then(() => {
                    req.session.user_id = user.id;
                    res.redirect('/passed');
                })
                .catch(() => {
                    req.flash('login', 'Invalid Password.');
                    res.redirect('/');
                });        
        })
        .catch(() => {
            req.flash('login', 'Cannot find email. Please enter a valid email.');
            res.redirect('/');
        });
});

app.post('/destroy/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/');
        });
});

app.listen(port, function(){
    console.log('port ' + port + '... listening...');
});