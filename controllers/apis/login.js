'use strict';
const connection = require('../../config/db');
const response = require('../../config/res');

exports.index = function(req, res) {
    response.ok("API running", res)
};  

exports.login = function(req, res){
    let getusername = req.body.username;
    let getpassword = req.body.password;
    connection.query('SELECT * FROM users where username = "'+getusername+'" and password = "'+md5(getpassword)+'" ', function (error, rows, fields){
        if(error){
            console.log(error)
            response.failed(rows, res)
        } else{
            if(res.length > 0) {
                response.ok(rows, res)
            }else{
                response.notfound(rows, res)
            }
            // let token =  jwt.sign({ id: rows[0].id, username: rows[0].username }, 'keyboard', { expiresIn: 50000000 });
        }
    });
};  
