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
const flash = require('express-flash');
const session = require('express-session');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
    secret: 'shhthisissecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000},
}));

// Setting up database
const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/messages_db');
mongoose.connection.on('connected', () => console.log('connected to mongo messages database'));

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
    }, replies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reply',
        }
    ]
} , {
    timestamps: true,
});

const replySchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
    }
} , {
    timestamps: true,
});

const Message = mongoose.model('Message', messageSchema);
const Reply = mongoose.model('Reply', replySchema);

// Routes
app.get('/', function(req, res) {
    Message.find({})
        .populate('replies')
        .then(messages => {
            res.render('index', { messages });
        })
        .catch(err => {
            console.log("we have an error!", err);
        });
});

app.post('/message', function(req, res) {
    Message.create(req.body)
        .then(message => {
            console.log('posted', message);
            res.redirect('/');
        })
        .catch(err => {
            console.log("we have an error!");
            for(let key in err.errors) {
                req.flash('message', err.errors[key].message);
                console.log(err.errors[key].message);
            }
            res.redirect('/');
        });
});

app.post('/message/delete/:id', function(req, res) {
    Message.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/');
        })
        .catch(() => console.log('error'));
});

app.post('/comment/:id', function(req, res) {
    Reply.create(req.body)
        .then(reply => {
            console.log('comment created', reply)
            return Message.findById(req.params.id)
                .then(message => {
                    message.replies.push(reply);
                    console.log('comment added to message', message);
                    return message.save()
                        .then(() => res.redirect('/'));
                })
                .catch(() => console.log('error'));
        })
        .catch(err => {
            console.log("we have an error!");
            for(let key in err.errors) {
                req.flash('comment', err.errors[key].message);
                console.log(err.errors[key].message);
            }
            res.redirect('/');
        });
});


app.listen(port, function(){
    console.log("Listening on port", port);
});