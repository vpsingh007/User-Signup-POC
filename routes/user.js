const express = require('express');
const router = express.Router();
const crypto = require("crypto");
const nodemailer = require("nodemailer");
// require('dotenv').config()

// Load Input Validation
const userValidate = require('../validation/userValidate');

// @route   POST api/register
// @desc    To create new user
router.post('/register', (req, res) => {
  const { errors, isValid } = userValidate(req.body);

  // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const user = req.body;
    const token  = crypto.randomBytes(20).toString("hex");

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'atuly3010@gmail.com',
        pass: 'vijay@123'
      }
    });

    const mailOptions = {
      from: `atuly3010@gmail.com`,
      to: `${user.email}`,
      subject: `Link to Edit User Profile`,
      text: 
        `You are receiving this because you have requested the reset of the password for your account.\n\n` + 
        `Please click on the following link to reset your password\n\n` +
        `This url will expires within one hour of receiving of it:\n\n` +
        `http://localhost:3000/edit-user-details?token=${token}\n\n` + 
        `If you did not request this, please ignore this email and your password will remain unchanged.\n`
    }

    transporter.sendMail(mailOptions, function(err, response) {
      if(err) {
        res.status(401).json("we are facing some server error to send mail on this email id");
      } else {
        res.status(200).json({
          message: "Email Sent to Edit the Profile",
          token: token
        });
      }
    });
});

module.exports = router;
