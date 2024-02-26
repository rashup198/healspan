const bcrypt = require("bcrypt");
const User = require("../models/User");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const Profile = require("../models/Profile");
const mailSender = require("../utils/mailSender");
require("dotenv").config()

// signup controller to regetser user

exports.signup= async(req,res)=>{
    try {
        const{firstName,lastName,email,password,confirmPassword,accountType,contactNumber,otp}= req.body;

        if(!firstName || !lastName || !email || !password || !confirmPassword || !accountType || !contactNumber || !otp){
            return res.status(403).send({
                success:false,
                message:"enter all field"
            })
        }

        if(password!==confirmPassword){
            return res.status(400).json({
                success :false,
                message:"Password and confirm passeod is not same"
            })
        }

        const userExist= await User.findOne({email});
        if(userExist){
            return res.status(400).json({
                success:false,
                message:"User already exist. use anaother email id"
            })
        }

        const response = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        console.log(response);
        if(response.length==0){
            return res.status(400).json({
                success:false,
                message:"Invalid OTP"
            })
        }else if(otp!==response[0].otp){
            return res.status(400).json({
                success:false,
                message:"Invalid OTP"
            })
        }
        //hash pass
        const hashedPassword = await bcrypt.hash(password,10)

        const profileDetails= await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null
        })

        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password:hashedPassword,
            accountType:accountType,
            additionalDetails:profileDetails._id
        })

        return res.status(200).json({
            success:true,
            user,
            message:"Account created successffully"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Account can not be created try again"
        })
    }
}


// login controller

exports.login= async (req, res)=>{
    try {

        const {email, password}= req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"enter all fields"
            })
        }

        // find user

        const user = await User.findOne({email}).populate("additionalDetails")
        console.log(user);

        if(!user){
            return res.status(400).json({
                success:false,
                message:"User is not registered, first create account then login"
            })
        }

        // genrate token 
        if( await bcrypt.compare(password, user.password)){
            const token = jwt.sign(
                {
                    email:user.email, id:user._id, role:user.accountType
                }, process.env.JWT_SECRET,
                {
                    expiresIn: "24h"
                }
            )

            user.token=token
            user.password=undefined

            //settinf cookies

            const options ={
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
            }
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message:"User Logged in Sucessfully"
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"password is wrong"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"something went wrong try again"
        })
    }
}

// otp

exports.sendotp = async (req, res) => {
    try {
      const { email } = req.body
      const checkUserPresent = await User.findOne({ email })

      if (checkUserPresent) {
        return res.status(401).json({
          success: false,
          message: `User is Already Registered`,
        })
      }
  
      var otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      })
      const result = await OTP.findOne({ otp: otp })
      console.log("Result is Generate OTP Func")
      console.log("OTP", otp)
      console.log("Result", result)

        while (result) {
            otp = otpGenerator.generate(6, {
              upperCaseAlphabets: false,
              lowerCaseAlphabets: false,
              specialChars: false,
            })
          }
          const otpPayload = { email, otp }
          const otpBody = await OTP.create(otpPayload)
          console.log("OTP Body", otpBody)
          res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            otp,
          })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success :false,
            error:error.message,
            message:"Can not send otp try again"
        })
    }
}

// change password

exports.changePassword= async (req, res)=>{
    try {
        const userDetails = await User.findById(req.user.id);

        // the old and new password
        const {oldPassword, newPassword}= req.body

        const match = await bcrypt.compare(oldPassword, userDetails.password)

        if(!match){
            return res.status(400).json({
                success:false,
                message:"Password incorrect"
            })
        }

        // updated password

        const hashedPass= await bcrypt.hash(newPassword,10)
        const updatedDetails = await User.findByIdAndUpdate(
            req.user.id,
            {password:hashedPass},
            {new:true}
            )

            // sending mail about password change

            try {
                const emailResponse = await mailSender(
                    updatedDetails.email,
                    `Password has beeen changed for you account ${updatedDetails.firstName}`,
                    passwordUpdated(
                        updatedDetails.email,
                        `Password has been updated succesfully for ${updatedDetails.firstName} ${updatedDetails.lastName}`
                    )
                )
                console.log("Mail sent " , emailResponse.response);
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    success:false,
                    message:"Some error occured while sending mail"
                })   
            }

            return res.status(200).json({
                success:true,
                message:"Password updated Sucessfully"
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error occured while updating password ",
            error:error.message
        })
    }
}