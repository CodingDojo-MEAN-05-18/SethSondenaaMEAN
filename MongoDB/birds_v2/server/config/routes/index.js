const router = require('express').Router();

module.exports = router
    .use('/birds', require('./bird.routes'));