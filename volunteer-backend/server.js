require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/volunteer', async (req, res) => {
  const { user_name, user_email, user_phone, user_interest } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: 'New Volunteer Application 🙌',
    text: `
      Name: ${user_name}
      Email: ${user_email}
      Phone: ${user_phone}
      Interest: ${user_interest}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Application sent successfully!' });
  } catch (error) {
    console.error('Error:', error.message); // 👈 THIS LOG IS CRUCIAL
    res.status(500).json({ error: 'Failed to send email. Check server logs.' });
  }
});

// 👇👇👇 ONLY ADDED — CONTACT FORM ROUTE (NO EXISTING CODE CHANGED) 👇👇👇

app.post('/api/contact', async (req, res) => {
  const { first_name, last_name, email, phone, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `New Contact Form: ${subject}`,
    text: `
      New Contact Form Submission:

      Name: ${first_name} ${last_name}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Message: ${message}

      — Sent from Contact Page
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <ul>
        <li><strong>Name:</strong> ${first_name} ${last_name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Subject:</strong> ${subject}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
      <p><em>Sent from Contact Page</em></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending contact form email:', error.message);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

// 👆👆👆 ONLY ADDED — CONTACT FORM ROUTE (NO EXISTING CODE CHANGED) 👆👆👆

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});