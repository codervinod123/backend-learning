import mongoose from "mongoose";

const patientSchema=new mongoose.Schema({
  
    patienName:{
    type:String,
    required:true,
   },
   diahnosedWith:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Doctor",
   },
   patientGender:{
    type:String,
    enum:["M","F","O"],
    required:true,
   },
   patiendAge:{
    type:Number,
    required:true,
   },
   patientBloodGroup:{
     type:String,
     required:true,
   },
   address:{
      type:String,
      required:true
   },
   admittedIn:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Hospital",
   }
   

},{timestamps:true});

export const Patient=mongoose.model("Patient",patientSchema);
