import express from 'express'
// console.log("server is loading...");
const app=express()
app.get("/",(req,res)=>{
    res.send("Json object")
})
app.listen(3000,()=>{
    console.log("server is running...");
})