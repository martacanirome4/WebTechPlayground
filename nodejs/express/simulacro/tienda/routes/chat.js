// tienda/routes/chat.js

const express = require('express');
const router = express.Router();
const users = require('../users');

router.get('/', function(req, res, next) {
    res.render('chat', { title: 'Chat', user: req.session.user, error: req.session.error });
    req.session.error = null;
});

module.exports = router;
