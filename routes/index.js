'use strict'

// all routes places in here
const login = require('./login');
const sample = require('./sample');

module.exports = function(app) {
    // pass the instance of routes
    login(app);
    sample(app);
}
