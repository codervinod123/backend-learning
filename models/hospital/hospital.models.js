import mongoose from "mongoose";

const hospitalSchema=new mongoose.Schema({
  hospitalName:{
    type:String,
    required:true,
  },
  addressLane1:{
    type:String,
    required:true
  },
  addressLane2:{
    type:String,
  },
  city:{
    type:String,
    required:true
  },
  pincode:{
    //putting in string because many country have alphanumeric pincode
    type:String,
    required:true
  },
  specializedIn:[
    {
        type:String,
    }
]
},{timestamps:true});

export const Hospital=mongoose.model("Hospital",hospitalSchema);
