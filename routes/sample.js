'use strict';

const controller_sample = require('../controllers/apis/sample');

const jwtverify = require('express-jwt');
const jwtverifying= jwtverify({
    secret: 'INdOnEsIA-MerDeKA'
});

module.exports = function(app) {
    app.route('/sample')
        .get(controller_sample.index);

};