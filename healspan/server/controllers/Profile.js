const User = require("../models/User");
const Profile = require("../models/Profile");
require("dotenv").config();
const mongoose = require('mongoose');

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


// delete profile

exports.deleteProfile=async (req,res)=>{
    try {
        const id = req.user.id;

        const user= await User.findById({_id:id})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }

        await Profile.findByIdAndDelete({
            _id: new mongoose.Types.ObjectId(user.additionalDetails),
        })
        await User.findByIdAndDelete({_id:id})

        return res.status(200).json({
            success:true,
            message:"Profile Deleted SuccessFuly"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to delete your Profile"
        })
    }
}

//get all user details

exports.getAllUserDetails = async (req, res) => {
    try {
      const id = req.user.id
      const userDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec()
      console.log(userDetails)
      res.status(200).json({
        success: true,
        message: "User Data fetched successfully",
        data: userDetails,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }