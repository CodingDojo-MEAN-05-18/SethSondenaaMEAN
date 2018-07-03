const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var session = require('express-session');
const port = process.env.PORT || 8005;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

require('./server/config/database');
require('./server/config/routes')(app);

// Static folder => images and stylesheets folders
// app.use(express.static(path.join(__dirname, 'static', 'stylesheets')));
// app.use(express.static(path.join(__dirname, 'static', 'images')));

app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.get('/', function(req, res) {
    res.render('index');
});




app.listen(port, () => console.log('express listening on port', port));