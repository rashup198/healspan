const Claim = require("../models/Claim");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/ImageUploader");
require("dotenv").config();

exports.submitClaim = async (req, res) => {
    try {
        const userId = req.user.id;
        const userDetails = await User.findById(userId);
        if (!userDetails) {
            return res.status(404).json({ 
                success: false,
                message: "User not found" 
            });
        }

        const { patientName, dateOfService, totalAmount } = req.body;
        const billPhoto = req.files.billPhoto;
        const medicalReport = req.files.medicalReport;

        if (!patientName || !dateOfService || !totalAmount || !billPhoto || !medicalReport) {
            return res.status(400).json({
                success: false,
                message: "Enter all fileds"
            });
        }

        const billUpload = await uploadImageToCloudinary(billPhoto, process.env.FOLDER_NAME);
        const medicalUpload = await uploadImageToCloudinary(medicalReport, process.env.FOLDER_NAME);

        const newClaim = await Claim.create({
            user: userId,
            patientName,
            dateOfService: new Date(dateOfService), 
            totalAmount,
            billPhoto: billUpload.secure_url,
            medicalReport: medicalUpload.secure_url
        });

        return res.status(200).json({
            success: true,
            message: "Claim submitted successfully",
            data: newClaim
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            success: false,
            message: "Failed to submit claim",
            error: error.message
        });
    }
}
