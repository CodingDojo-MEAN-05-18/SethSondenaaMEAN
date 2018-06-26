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
mongoose.connect('mongodb://localhost/messages_db');
mongoose.connection.on('connected', () => console.log('connected to mongo messages database'));

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
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
    },
    content: {
        type: String,
        required: true,
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
        .catch(() => console.log('error'));
});

app.post('/message', function(req, res) {
    Message.create(req.body)
        .then(message => {
            console.log('posted', message);
            res.redirect('/');
        })
        .catch(() => console.log('error'));
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
        .catch((error => { console.log(error)}));
});


app.listen(port, function(){
    console.log("Listening on port", port);
});