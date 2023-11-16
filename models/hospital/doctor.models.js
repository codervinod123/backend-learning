import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({

    doctorName:{
        type:String,
        required:true,
       },
       salary:{
        type:String,
        required:true,
       },
      qualifications:{
        type:String,
        required:true
       },
       workedExperiance:{
          type:Number,
          required:true,
          default:0,
       },
       doctorAge:{
        type:Number,
        required:true,
       },
      
       address:{
          type:String,
          required:true
       },
      workedIn:[
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:"Hospital",
        }
      ]

},{timestamps:true});

export const Doctor=mongoose.model("Doctor",doctorSchema);
