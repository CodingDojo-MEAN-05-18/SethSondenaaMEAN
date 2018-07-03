const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/database');
app.use(require('./server/config/routes'));


app.listen(port, () => console.log('app... listing... on... port...', port));