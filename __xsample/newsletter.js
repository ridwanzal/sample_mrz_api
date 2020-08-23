'use strict';

const response = require('../config/res');
const connection = require('../config/db');
const jwt = require('jsonwebtoken');

exports.index = function(req, res) {
    response.ok("Retrieve all newsletter", res)
};  

exports.add = function(req, res){
    let email = req.body.email;
    let query = "INSERT INTO scafol_newsletter (email) VALUES('"+email+"')";
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
                    subject: 'Terimakasih anda telah berlangganan',
                    body: 'Kamu akan diarahkan ke email berikut',
                    text: "Terimakasih anda sudah berlangganan newsletter kami. Dapatkan info terbaru seputar dunia konstruksi. Salam PT. Aplikasi Konstruksi Global.",
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message %s sent: %s', info.messageId, info.response);
                });
                response.ok(rows, res);
            }
        }
    });
}
