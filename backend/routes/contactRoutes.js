const express = require("express");
const Contact = require("../models/Contact");
const { Resend } = require("resend");

const router = express.Router();

const resend = new Resend(
  process.env.RESEND_API_KEY
);

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

    // Send Email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "palenterprises014@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("✅ Email Sent");

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });

  } catch (error) {

    console.log("❌ ERROR");
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

module.exports = router;