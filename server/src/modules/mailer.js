const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const siteEmail = process.env.SITE_EMAIL;
const sitePassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    // host: 'smtp.titan.email',
    host: 'smtp.freesmtpservers.com',
    port: 25, // 465 for SSL or 587 for insecure
    secure: false, // true for 465, false for other ports
    // auth: {
    //     user: siteEmail,
    //     pass: sitePassword
    // }
});

async function sendMail(to, subject, html) {
    try {
        const info = await transporter.sendMail({
            from: siteEmail,
            to: to,
            subject: subject,
            html: html
        });

        // console.log('Email sent: ', info.response);
        return true;
    } catch (error) {
        console.error('Error sending email: ', error.message);
        return false;
    }
}

module.exports = sendMail;
