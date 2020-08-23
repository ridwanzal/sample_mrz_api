'use strict';
const connection = require('../../config/db');
const response = require('../../config/res');

exports.index = function(req, res) {
    let json_array_obj = [
        {
            'id' : 1,
            'name' : 'ridwan',
            'age' : '27'
        },
        {
            'id' : 1,
            'name' : 'reyhan',
            'age' : '29'
        },
        {
            'id' : 3,
            'name' : 'ridwreoan',
            'age' : '27'
        },
        {
            'id' : 4,
            'name' : 'asd',
            'age' : '29'
        }
    ];

    response.ok(json_array_obj, res)
};  

