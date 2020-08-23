const mysql = require('mysql');
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "kredit_app"
});

connection.connect(function(err){
    if(err) throw err;
})

module.exports = connection;
