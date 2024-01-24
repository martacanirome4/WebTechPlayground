// tienda/routes/register.js

const express = require('express');
const router = express.Router();
const users = require('../users');

router.get('/', function(req, res, next) {
    res.render('register', { title: 'Sign Up', user: req.session.user, error: req.session.error });
    req.session.error = null; // Limpiar el mensaje de error después de mostrarlo
});

router.post('/', function(req, res, next) {
    const username = req.body.user;
    const password = req.body.pass;

    // Verificar si el usuario ya existe
    if (users.getUser(username)) {
        req.session.error = 'User already exists.';
        res.redirect('/register');
        return;
    }

    // Registrar al usuario
    users.register(username, password, function() {
        // Iniciar sesión automáticamente después del registro
        req.session.user = username;
        res.redirect('/restricted');
    });
});

module.exports = router;
