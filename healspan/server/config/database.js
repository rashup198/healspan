const mongoose = require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGO_URI,{    
    }).then(()=>{
        console.log("Connected to db");
    }).catch((err)=>{
        console.log("Some error connnecting to db", err);
        process.exit();
    })
}