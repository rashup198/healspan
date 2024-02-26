const nodemailer = require('nodemailer');
require('dotenv').config();

const mailSender = async (email, title, body)=>{

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
        let info = await transporter.sendMail({
            from:`HealSpan `,
            to: email,
            subject: title,
            text: body
        });
        console.log('Message sent: %s', info);
        return info;
    } catch (error) {
        console.log(error);
    }
}

module.exports = mailSender;