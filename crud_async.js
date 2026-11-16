const fs = require("fs")
// callback based method

// create a file
fs.writeFile("notes.txt","ECE-A", (err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("data successfully written in the files notes.txt")
})
fs.readFile("notes.txt","utf8",(err, data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})
// UPDATE FILE
const updateData = "Hello ECE-A"
fs.appendFile("notes.txt",updateData,(err)=>{
    if(err){
        console.log(err);
        return;
    }
console.log("file updated successfully");

})
