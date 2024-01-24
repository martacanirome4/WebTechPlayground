// tienda/routes/register.js

const express = require('express');
const router = express.Router();
const users = require('../users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Sign Up', user: req.session.user});
});

module.exports = router;
