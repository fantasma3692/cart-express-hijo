const express = require("express");
const router = express.Router();
const {
  signInNewSession,
  signUpNewEmail,
} = require("../controllers/authController");
router.post("/signup", signUpNewEmail);
router.post("/signin", signInNewSession);
module.exports = router;
