const express = require("express");
const router = express.Router(); 
const { auth } = require("../middelwares/auth"); 
const {submitClaim,getClaimDetail,editClaim} = require("../controllers/Claim");

router.post("/submit-claim", auth,submitClaim);
router.post("/get-claim-detail",auth,getClaimDetail);
router.put("/edit-claim_detail",auth,editClaim);

module.exports = router;