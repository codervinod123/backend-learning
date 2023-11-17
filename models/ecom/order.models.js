import mongoose from "mongoose";

const orderItems=new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema=new mongoose.Schema({
 
    orderPrice:{
       type:Number,
       required:true,
       default:0
    },
    orderByUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    orderItems:{
        type:[orderItems]
    },
    orderStatus:{
        type:String,
        enum:["PENDING","SHIPPED","DELIVERED"],
        default:"PENDING",
        required:true,
    },
    orderAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

    

},{timestamps:true});

export const Order=mongoose.model("Order",orderSchema);