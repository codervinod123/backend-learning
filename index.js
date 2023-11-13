const express=require("express");
require("dotenv");
const app=express();

const PORT=process.env.PORT || 4000;
app.get('/',(req,res)=>{
   res.send("Hello backend");
})

app.get('/login',(req,res)=>{
    res.send("Hello login page");
 })

app.listen(PORT,()=>{
  console.log("heelo backend in console");
})
