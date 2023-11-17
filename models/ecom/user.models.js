import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

     userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
     },
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
     },
     mobile:{
        type:Number,
        required:true,
     },
     password:{
        type:String,
        required:true
     },
     address:{
        type:String,
        required:true
     },
     city:{
        type:String,
        required:true,
     },
     pincode:{
        type:String,
        required:true
     },


},{timestamps:true});

export const User=mongoose.model("User",userSchema);