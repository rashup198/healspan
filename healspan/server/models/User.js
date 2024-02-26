const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Admin","User","Hospital",],
        required:true,
    },
    active:{
        type:Boolean,
        default:true,
    },
    approved:{
        type:Boolean,
        default:true,
    },  
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Profile'
    },
    clamins:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Claim'
    }],
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },

},{timestamps:true});

module.exports = mongoose.model('User',userSchema);