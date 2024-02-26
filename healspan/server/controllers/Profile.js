const User = require("../models/User");
const Profile = require("../models/Profile");
require("dotenv").config();

exports.updateProfile = async (req, res) => {
    try {
        const { firstName = "", lastName = "", dateOfBirth = "", about = "", contactNumber = "", gender = "" } = req.body;
        const userId = req.user.id;

        // Find user details
        const userDetails = await User.findById(userId);
        if (!userDetails) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Find profile details
        const profile = await Profile.findById(userDetails.additionalDetails);
        if (!profile) {
            return res.status(404).json({ success: false, message: "Profile not found" });
        }

        // Update user details
        const updatedUser = await User.findByIdAndUpdate(userId, { firstName, lastName }, { new: true });
        
        // Update profile details
        profile.dateOfBirth = dateOfBirth;
        profile.about = about;
        profile.contactNumber = contactNumber;
        profile.gender = gender;
        await profile.save();

        // Populate updated user details
        const updatedUserDetails = await User.findById(userId).populate("additionalDetails");

        return res.status(200).json({
            success: true,
            message: "User details updated successfully",
            updatedUserDetails
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            success: false, 
            error: "Internal server error"
         });
    }
}
