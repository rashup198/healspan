const express = require("express");
const router = express.Router(); 
const { auth } = require("../middelwares/auth"); 
const {submitClaim,getClaimDetail,editClaim,getAllClaims,deleteClaim,getAllApprovedClaims,getAllRejectedClaims} = require("../controllers/Claim");

router.post("/submit-claim", auth,submitClaim);
router.post("/get-claim-detail",auth,getClaimDetail);
router.put("/edit-claim_detail",auth,editClaim);
router.get("/get-all-claims",auth,getAllClaims);
router.delete("/delete-claim",auth,deleteClaim);
router.get("/all-approved-claims",auth,getAllApprovedClaims);
router.get("/all-rejected-claims",auth,getAllRejectedClaims);

module.exports = router;