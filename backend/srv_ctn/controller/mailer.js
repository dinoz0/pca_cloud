// Import des modules
const nodemailer = require('nodemailer');

// Configuration nodemailer
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.ionos.fr",
    auth: {
        user: 'pca.paul@clic-boum-paf.com',
        pass: 'Paul64$Pca',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

exports.sendMail = (req, res) => {
    const {from, subject, text } = req.body;
    const mailData = {
        from: from,
        to: 'pca.paul@clic-boum-paf.com',
        subject: subject,
        text: text,
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
}