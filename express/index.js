import express from 'express'
// console.log("server is loading...");
const app=express()
const data={
    username:"Ananya Srivastava",
    location:"Delhi"
}
app.get("/",(req,res)=>{
    res.send(data)
})
app.listen(3000,()=>{
    console.log("server is running...");
})