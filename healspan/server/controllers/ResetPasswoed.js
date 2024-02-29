const { Error } = require("mongoose");
const User = require("../models/User")
const mailSender = require("../utils/mailSender");
const bcrypt= require("bcryptjs");
const crypto =require("crypto");

// reset password token generation

exports.resetPasswordToken= async (req,res)=>{
    try {
        const email = req.body.email;
        const user = await User.findOne({email:email})
        
        if(!user){
            return res.status(400).json({
                sucess:false,
                message:"This email is not registed with us"
            })
        }

        const token = crypto.randomBytes(20).toString('hex');

        await User.findOneAndUpdate({email},{token, resetPasswordExpires:Date.now()+3600000})

        const url= `http://localhost:5173/update-password/${token}`

        await mailSender(
            email,
            "Password Reset",
            `Your Link for the password reset is ${url} please check`

        )
        return res.status(200).json({
            success:true,
            message:"Reset password link sent to your email address"

        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to send the reset password link",
            error:error.message
        })
    }
}

