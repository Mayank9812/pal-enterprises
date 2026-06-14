const express = require("express");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    console.log("✅ Contact Saved");

    // Create transporter
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4,
});

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log(
      "EMAIL_PASS:",
      process.env.EMAIL_PASS ? "FOUND" : "MISSING"
    );

    console.log("Before sendMail");

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("After sendMail");
    console.log("Email Info:", info);

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });

  } catch (error) {

    console.log("❌ CONTACT/NODEMAILER ERROR");
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

module.exports = router;