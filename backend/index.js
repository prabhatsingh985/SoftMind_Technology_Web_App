const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
// require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Server config
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 9901;

// Mail config
const MailHost = process.env.MAIL_HOST || "mail.coraltele.com";
const MailPort = parseInt(process.env.MAIL_PORT, 10) || 587;
const MailSecure = process.env.MAIL_SECURE === 'true';
const MailUser = process.env.MAIL_USER || "mailgateway@coraltele.com";
const MailPassword = process.env.MAIL_PASSWORD || "%$#Maig#$&7634";
const AdminUser = process.env.ADMIN_MAIL_ID || "ps2656728@gmail.com";

// Optional: Unused but fixed Sendmail function
const Sendmail = async (username, memberList, subject = "Default Subject", text = "Default Text") => {
    const transporter = nodemailer.createTransport({
        host: MailHost,
        port: MailPort,
        secure: MailSecure,
        auth: {
            user: MailUser,
            pass: MailPassword,
        },
    });

    const mailOptions = {
        from: MailUser,
        to: username,
        subject,
        text: `${text} ${memberList.join(", ")}.\n\nBest regards,\nRahul Singh`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully to: ${username}`);
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
    }
};

// Send user contact info to admin
const SendmailTootp = async (userMail, mailSubject, mailText) => {
    const transporter = nodemailer.createTransport({
        host: MailHost,
        port: MailPort,
        secure: MailSecure,
        auth: {
            user: MailUser,
            pass: MailPassword,
        },
    });

    const mailOptions = {
        from: MailUser,
        to: AdminUser,
        subject: mailSubject,
        text: mailText,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`User details email sent to admin (${AdminUser})`);
        return true;
    } catch (error) {
        console.error(`Error sending user details email: ${error.message}`);
        return false;
    }
};

// API to receive user data and send mail
app.post('/api/send/contact', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      position,
      cvUrl = '',
      message = ''
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !position) {
      return res
        .status(400)
        .json({ message: "firstName, lastName, email, phone and position are required", status: 0 });
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const mailSubject = `New Contact Form Submission from ${fullName}`;
    const mailText = `
Hello Admin,

A new user has submitted their contact information:

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Position: ${position}
CV URL: ${cvUrl || 'N/A'}
Message: ${message || 'N/A'}

Regards,
Your Server`.trim();

    const mailSent = await SendmailTootp(email, mailSubject, mailText);

    if (!mailSent) {
      return res
        .status(500)
        .json({ message: "Failed to send email", status: -1 });
    }

    return res.status(200).json({
      message: "User information received and email sent to admin",
      status: 1,
      data: {
        firstName,
        lastName,
        email,
        phone,
        position,
        cvUrl,
        message
      }
    });
  } catch (error) {
    console.error("Error in /api/send/contact:", error);
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message, status: -1 });
  }
});




// Start server
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

