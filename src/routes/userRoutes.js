const express = require('express');
const router = express.Router();
const {getUserXIdsupabase} = require("../controllers/userController")
const authenticate = require("../middleware/authenticate")



router.get("/:id_auth_supabase",authenticate,getUserXIdsupabase)
 module.exports = router
