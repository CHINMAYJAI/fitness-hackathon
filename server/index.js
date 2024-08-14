const express=require("express");
const fitness=express();
const port=8000;
fitness.get('/',(req,res)=>{
  return res.send("welcome to fitness app");
})
fitness.listen(port,()=>{
  console.log(`server is running on ${port}`);
})
