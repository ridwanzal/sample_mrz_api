'use strict';

const response = require('../config/res');
const connection = require('../config/db');
const jwt = require('jsonwebtoken');

exports.index = function(req, res) {
    connection.query('SELECT * FROM scl_demo_request', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};  

exports.add = function(req, res){
    let nama = req.body.nama;
    let instansi = req.body.instansi;
    let telepon = req.body.telepon;
    let email = req.body.email;

    let query = "INSERT INTO \
                 scl_demo_request (nama, instansi, telepon, email) \
                 VALUES('"+nama+"','"+instansi+"','"+telepon+"','"+email+"')";
    connection.query(query, function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            if (rows.length === 0) {
                response.notfound(rows, res)
            } else {
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    service: 'gmail',
                    port: 465,
                    secure: false,
                    requireTLS: true,
                    auth: {
                        // should be replaced with r    eal sender's account
                        user: 'scafoltk@gmail.com',
                        pass: 'stkakg123'
                    }
                });
                let mailOptions = {
                    // should be replaced with real recipient's account
                    from: '"Scafol Indonesia" <scafoltk@gmail.com> ',
                    to: '' + email,
                    subject: 'Permintaan demo Scafol Gov',
                    body: 'Kamu akan diarahkan ke email berikut',
                    text: "Terimakasih, permintaan anda akan segera kami proses. Tunggu kabar dari kami secapatnya. Salam PT. Aplikasi Konstruksi Global.",
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message %s sent: %s', info.messageId, info.response);
                    transport.close();
                });
                response.ok(rows, res);
            }
        }
    });
}
