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
                    expriresIn:"24h",
                }
            )

            user.token=token
            user.password=undefined

            //settinf cookies

            const options ={
                exprires:new Date(Date.now()+500000),
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

exports.sendotp= async(req, res)=>{
    try {
        const {email}= req.body;

        const userPresent = await User.findOne({email});

        if(userPresent){
            return res.status(400).json({
                success:false,
                message:"User is already registerd"
            })
        }
        const otp = otpGenerator.generate(6,{
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        })
        const result = await OTP.findOne({otp:otp})
        console.log("the otp", otp);
        console.log("the result",result);

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