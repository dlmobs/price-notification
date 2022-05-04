require('dotenv').config();

const nodemailer = require('nodemailer')

const sendText = function(message) {
    let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.TO_EMAIL,
        subject: "/",
        text: message,
    }

    transport.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log("sent!");
        }
    });
}

module.exports = sendText