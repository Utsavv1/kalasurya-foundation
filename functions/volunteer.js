require('dotenv').config();
const nodemailer = require('nodemailer');

export async function handler(event, context) {
  // Parse incoming request
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  // Determine which route is being called
  const path = event.path; // e.g., "/api/volunteer" or "/api/contact"

  // --- Volunteer Route ---
  if (path === '/api/volunteer') {
    const { user_name, user_email, user_phone, user_interest } = body;

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
      return { statusCode: 200, body: JSON.stringify({ message: 'Application sent successfully!' }) };
    } catch (error) {
      console.error('Error:', error.message);
      return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send email. Check server logs.' }) };
    }
  }

  // --- Contact Route ---
  else if (path === '/api/contact') {
    const { first_name, last_name, email, phone, subject, message } = body;

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
      return { statusCode: 200, body: JSON.stringify({ message: 'Message sent successfully!' }) };
    } catch (error) {
      console.error('Error sending contact form email:', error.message);
      return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send message. Please try again later.' }) };
    }
  }

  // --- Unknown Route ---
  else {
    return { statusCode: 404, body: 'Route not found' };
  }
}
