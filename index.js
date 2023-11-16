const express=require("express");
require("dotenv");
const app=express();
const data=require("./data");

const PORT=process.env.PORT || 4000;
app.get('/',(req,res)=>{
   res.send("Hello backend");
})

app.get('/login',(req,res)=>{
    res.send("Hello login page");
 })

 app.get('/register', (req, res) => {
   res.send("Hello register page");
});

 app.get('/data', (req, res) => {
   res.json(data);
});

app.listen(PORT,()=>{
  console.log("heelo backend in console",PORT);
})
