const express = require("express");
const router = express.Router(); 

const { updateProfile,deleteProfile, getAllUserDetails} = require("../controllers/Profile");
const { auth } = require("../middelwares/auth"); 


router.put("/update-profile", auth, updateProfile);
router.delete("/delete-profile",auth,deleteProfile);
router.get("/get-all-user-details",auth,getAllUserDetails);


module.exports = router;
