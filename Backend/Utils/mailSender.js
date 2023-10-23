const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    let transporter = nodemailer.createTransport({
    service: 'gmail',
      auth: {
        user: "atritilak486@gmail.com",
        pass: "ynsx jxyd eigr dndo",
      },
    });
    // Send emails to users
    let info = await transporter.sendMail({
      from: "Feedback System - Poornima Group Of Colleges.",
      to: email,
      subject: title,
      html: body,
    });
    console.log("Email info: ", info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
