const express = require("express");
const { register, login, completeProfile } = require("../controllers/auth");

const router = express.Router();

router.post("/register", register);
router.post("/complete-profile", completeProfile);
router.post("/login", login);

module.exports = router;
