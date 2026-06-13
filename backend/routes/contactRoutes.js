const express = require("express");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {

    const { name, email, message } = req.body;

    // Save in MongoDB
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    console.log("✅ Contact Saved");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {

      await transporter.sendMail({
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

      console.log("✅ Email Sent");

    } catch (mailError) {

      console.log("❌ MAIL ERROR");
      console.log(mailError);

      return res.status(500).json({
        success: false,
        message: mailError.message,
      });

    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });

  } catch (error) {

    console.log("❌ CONTACT ERROR");
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

module.exports = router;