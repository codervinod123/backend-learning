import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
   
    prodName:{
        type:String,
        required:true,   
      },
    prodDescription:{
        type:String,
        required:true   
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    productImage:{
        // putting it sting because wanted to upload image on clouddinary and use that 
        // URL over here to populate image of the product
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true,
        default:0
    },
    productStock:{
        type:Number,
        required:true,
        default:0
    },
    productOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{timestamps:true});

export const Product=mongoose.model("Product",productSchema);