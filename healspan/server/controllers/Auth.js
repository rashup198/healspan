const bcrypt = require("bcrypt");
const User = require("../models/User");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const Profile = require("../models/Profile")


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