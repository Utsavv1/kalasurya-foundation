// server/src/server.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Allow your React app
  optionsSuccessStatus: 200
}));
app.use(express.json({ limit: '10mb' }));

// Create reusable transporter
const transporter = nodemailer.createTransporter({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Validate email format
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// POST: /api/sendVolunteerEmail
app.post('/api/sendVolunteerEmail', async (req, res) => {
  const { name, email, phone, interest } = req.body;

  // Validation
  if (!name || !email || !phone || !interest) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  const mailOptions = {
    from: `"Volunteer Form" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL, // Admin receives the form
    replyTo: email,              // So admin can reply directly
    subject: `New Volunteer: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #e74c3c;">📬 New Volunteer Application</h2>
        <p><strong>📅 Submitted on:</strong> ${new Date().toLocaleString()}</p>
        <hr/>
        <p><strong>👤 Name:</strong> ${name}</p>
        <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>📞 Phone:</strong> ${phone}</p>
        <p><strong>🎯 Interest:</strong> ${interest}</p>
        <hr/>
        <p><em>Submitted via Kalasurya Foundation Website</em></p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${process.env.ADMIN_EMAIL}`);
    res.status(200).json({ message: "Thank you! Your volunteer application has been submitted successfully." });
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    res.status(500).json({ message: "Failed to submit. Please try again later." });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: "OK", message: "Server is running 🚀" });
});

app.listen(PORT, () => {
  console.log(`🟢 Server running at http://localhost:${PORT}`);
  console.log(`📨 Admin email: ${process.env.ADMIN_EMAIL}`);
});