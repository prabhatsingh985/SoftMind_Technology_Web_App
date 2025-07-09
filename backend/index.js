const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Server config
const HOST = process.env.HOST  
const PORT = process.env.PORT  

// Mail config
const MailHost = process.env.MAIL_HOST
const MailPort = parseInt(process.env.MAIL_PORT, 10)  
const MailSecure = process.env.MAIL_SECURE === 'true';
const MailUser = process.env.MAIL_USER  
const MailPassword = process.env.MAIL_PASSWORD  
const AdminUser = process.env.ADMIN_MAIL_ID  

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

// API to receive user data and send mail from Homepage Contact Form
app.post('/api/send/homepagecontact', async (req, res) => {
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

A new user has submitted their contact information from Homepage Contact Form.:

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
    console.error("Error in /api/send/homepagecontact:", error);
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message, status: -1 });
  }
});




// API to receive user data and send mail from Contact Us Form 
 app.post('/api/send/Contactpagecontact', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      tellUs,
      message = ''
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !tellUs) {
      return res.status(400).json({
        status: 0,
        message: "firstName, lastName, email, phone and tellUs are required"
      });
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const mailSubject = `New Contact Form Submission from ${fullName}`;
    const mailText = `
Hello Admin,

A new user has submitted their contact information from the Contact Us page:

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Tell Us: ${tellUs}
Message: ${message || 'N/A'}

Regards,
Your Server`.trim();

    const mailSent = await SendmailTootp(
      /* to: */ process.env.ADMIN_EMAIL,
      /* subject */ mailSubject,
      /* text/body */ mailText
    );

    if (!mailSent) {
      return res.status(500).json({
        status: -1,
        message: "Failed to send email to admin"
      });
    }

    return res.status(200).json({
      status: 1,
      message: "Your message has been received. We will get back to you shortly!",
      data: { firstName, lastName, email, phone, tellUs, message }
    });
  } catch (error) {
    console.error("Error in /api/send/Contactpagecontact:", error);
    return res.status(500).json({
      status: -1,
      message: "Internal server error",
      error: error.message
    });
  }
});






// API to receive user data and send mail from Apply Form
app.post('/api/send/Applypagecontact', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      career,
      technologies,
      message = ''
    } = req.body;

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !career ||
      !technologies
    ) {
      return res.status(400).json({
        status: 0,
        message:
          'firstName, lastName, email, phone, career, and technologies are required'
      });
    }

    // Compose email
    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const subject = `New Application from ${fullName}`;
    const body = `
Hello Admin,

You have received a new application via the Apply page:

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Career Opportunity: ${career}
Technologies: ${technologies}
Message: ${message || 'N/A'}

Regards,
Your Server
    `.trim();

    // Send to admin inbox
    const mailSent = await SendmailTootp(
      process.env.ADMIN_EMAIL,
      subject,
      body
    );

    if (!mailSent) {
      return res.status(500).json({
        status: -1,
        message: 'Failed to send email to admin'
      });
    }

    // Success
    return res.status(200).json({
      status: 1,
      message: 'Application submitted successfully!',
      data: { firstName, lastName, email, phone, career, technologies, message }
    });
  } catch (err) {
    console.error('Error in /api/send/Applypagecontact:', err);
    return res.status(500).json({
      status: -1,
      message: 'Internal server error',
      error: err.message
    });
  }
});

// Start server
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

