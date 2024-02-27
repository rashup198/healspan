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

// view claim details

exports.getClaimDetail= async(req,res)=>{
    try {
       const userId= req.user.id;
       if(!userId){
        return res.status(400).json({
            success:false,
            message:"User Not found"
        })
       }

       const {claimId}= req.body;
       if(!claimId){
        return res.status(400).json({
            success:false,
            message:"Enter claim id"
        })
       }

       const claimDetails = await Claim.findById(claimId);
       if(!claimDetails){
        return res.status(404).json({
            success:false,
            message:"Claim not found"
        })
       }

       return res.status(200).json({
        success:true,
        message:"Claim details fetched Successfully",
        data:claimDetails
       })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"failed to fetch Claim details",
            error: error.message
        })
    }
}

// edit claim detail 

exports.editClaim= async (req,res)=>{
    try {
        const{claimId}= req.body;
        const updates =req.body;
        const claim = await Claim.findById(claimId);

        if(!claim){
            return res.status(400).json({
                success:false,
                message:"Claim not found"
            })
        }

        if(req.files){
            console.log("bill Image");
            const billPhoto = req.files.billPhoto;
            const medicalReport= req.files.medicalReport;
            const billUpload = await uploadImageToCloudinary(billPhoto, process.env.FOLDER_NAME);
            const medicalUpload = await uploadImageToCloudinary(medicalReport, process.env.FOLDER_NAME)
            claim.billPhoto=billUpload.secure_url;
            claim.medicalReport= medicalUpload.secure_url;
        }

        for(const key in updates){
            claim[key]= updates[key];
        }

        await claim.save();

        const updatedClaim = await Claim.findOne({_id:claimId});

        return res.status(200).json({
            success:true,
            message:"Claim details updted Sucessfully",
            data:updatedClaim
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"failed to update Claim details",
            error: error.message
        })
    }
}

// get all claims

exports.getAllClaims= async (req,res)=>{
    try {
        const allClaims = await Claim.find({})

        if(!allClaims){
            return res.status(400).json({
                success: false,
                message:"Claims not found",
            })
        }

        return res.status(200).json({
            success: true,
            message:"All Claims fetched successfully",
            data: allClaims
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"Something went wrong",
        })
    }
}

// delete claim
exports.deleteClaim=async(req,res)=>{
    try {
        const {claimId} = req.body;
        const claim = await Claim.findById(claimId);
        if(!claim){
            return res.status(400).json({
                success: false,
                message:"Claims not found",
            })
        }

        await Claim.findByIdAndDelete(claimId);

        return res.status(200).json({
            status:true,
            message:"Claim deleted successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"Something went wrong",
        })
    }
}


//// get all approved claims
exports.getAllApprovedClaims = async (req, res) => {
    try {
        const approvedClaims = await Claim.find({ status: 'approved' });

        if (!approvedClaims) {
            return res.status(404).json({
                success: false,
                message: "No approved claims found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "All approved claims fetched successfully",
            data: approvedClaims
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch approved claims",
            error: error.message
        });
    }
}

// get all rejected claims
exports.getAllRejectedClaims = async (req, res) => {
    try {
        const rejectedClaims = await Claim.find({ status: 'denied' });

        if (!rejectedClaims) {
            return res.status(404).json({
                success: false,
                message: "No rejected claims found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "All rejected claims fetched successfully",
            data: rejectedClaims
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch rejected claims",
            error: error.message
        });
    }
}


