const OTP = require("../models/Otp");
require("dotenv").config();
const mailSender = require("../Utils/mailSender");

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendVerificationEmail = async (email, otp) => {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      `<h1>Please confirm your OTP</h1>
               <p>Here is your OTP code: ${otp}</p>`
    );
    console.log("Email sent successfully: ", mailResponse);
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
