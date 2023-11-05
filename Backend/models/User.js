const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      default: "N/A"
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "admin", "faculty", "parent"],
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    registrationNumber: {
      type: String,
      unique: true,
    },
    collegeEmail: {
      type: String,
      unique: true,
    },
    campus: {
      type: String,
      unique: true,
    },
    branch: {
      type: String,
      unique: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

// Hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  try {
    const salt = 10;
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

// Compare the given password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.error("Error comparing password:", error);
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
