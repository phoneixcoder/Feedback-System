const express = require("express");
const cors = require("cors");
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const otpRoutes = require('./routes/otp');
const feedbackRoutes = require('./routes/feedback');
require("dotenv").config({ path: "./.env" });

const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Replace with the actual origin of your frontend application
};

app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/otp', otpRoutes);
app.use('/feedback', feedbackRoutes);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(5110, () =>
      console.log(`Server has started on http://localhost:${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
