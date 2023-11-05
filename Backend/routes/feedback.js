const express = require("express");
const { submitFeedback } = require("../controllers/feedback");

const router = express.Router();

router.post("/submit-feedback", submitFeedback);

module.exports = router;
