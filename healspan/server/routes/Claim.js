const express = require("express");
const router = express.Router(); 
const { auth } = require("../middelwares/auth"); 
const {submitClaim} = require("../controllers/Claim");

router.post("/submit-claim", auth,submitClaim);

module.exports = router;