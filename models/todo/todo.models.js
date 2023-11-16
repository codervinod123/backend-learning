import mongoose, { model, mongo } from "mongoose";

const todoSchema=new mongoose.Schema({
    
    content:{
        type:String,
        required:true,
        unique:true,
    },
    complete:{
      type:true,
      default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User" 
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subtodo"
        }
    ]

},{timestamps:true});

export const Todo=mongoose.model("User",todoSchema);