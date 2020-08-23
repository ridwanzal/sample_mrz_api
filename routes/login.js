'use strict';

const controller_login = require('../controllers/apis/login');

const jwtverify = require('express-jwt');
const jwtverifying= jwtverify({
    secret: 'INdOnEsIA-MerDeKA'
});

module.exports = function(app) {
    app.route('/')
        .get(controller_login.index);

    // app.route('/users')
    //     .get(jwtverifying, todoList.users);

    app.route('/login')
        .post(controller_login.login);


};