const OTP = require("../models/Otp");
require("dotenv").config();
const mailSender = require("../Utils/mailSender");

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendVerificationEmail = async (email, otp) => {
  const emailSubject = "Verification Email";
  const emailContent = `
  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Feedback Portal Poornima</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Poornima. Use the following OTP to complete your Sign Up procedures. OTP is valid for 2 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
    <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Feedback Portal Poornima</p>
      <p>Sitapura Industrial Area, Jaipur</p>
      <p>Rajasthan, India</p>
    </div>
  </div>
</div>
  `;

  try {
    const mailResponse = await mailSender(email, emailSubject, emailContent);
    return 200;
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
};

const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = generateOTP();
    const OTPDoc = new OTP({ email, otp });
    await OTPDoc.save();
    sendVerificationEmail(email, otp);
    return res
      .status(200)
      .json({ message: "OTP sent. Verify OTP to complete registration." });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const otpDoc = await OTP.findOne({ email, otp });
    if (!otpDoc) {
      return res.status(401).json({ message: "Invalid OTP" });
    }
    await otpDoc.deleteOne();
    return res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { sendOTP, verifyOTP };
