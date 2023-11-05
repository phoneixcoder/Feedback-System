const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema(
  {
    feedbackType: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    userInfo : {
        required: true,
        type: Object,
    },
    email : {
        type: String,
        required: true,
    },
    campus : {
        type: String,
        required: true,
    },
    feedBackResponse : {
        type: Object,
        required: true,
    }
  },
  { timestamps: true, versionKey: false }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
