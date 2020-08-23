'use strict';

const response = require('../config/res');
const connection = require('../config/db');
const jwt = require('jsonwebtoken');

exports.users = function(req, res) {
    connection.query('SELECT * FROM users', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.login = function(req, res){
    let getusername = req.body.username;
    let getpassword = req.body.password;
    connection.query('SELECT * FROM users where username = "'+getusername+'" and password = "'+sha1(getpassword)+'" ', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            let token =  jwt.sign({ id: rows[0].id, username: rows[0].username }, 'keyboard', { expiresIn: 50000000 });
            response.authsuccess(rows, res, token)
        }
    });
};  

exports.index = function(req, res) {
    response.ok("API running", res)
};  