const Feedback = require("../models/Feedback");

const submitFeedback = async (req, res) => {
    const { feedbackType, role, userInfo, email, campus, feedBackResponse} = req.body;

    try {
        const feedback = new Feedback({ feedbackType, role, userInfo, email, campus, feedBackResponse});
        await feedback.save();
        res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Feedback submission failed due to an internal error" });
    }
}


module.exports = { submitFeedback }