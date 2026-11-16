const fs= require("fs")
//1. create a file
fs.writeFile("notes.txt","FS module started" (err)=>{
    if (err){
        console.log(err);
        return
    }
    console.log("File Written successfully");

});
//read the file
fs.readFile("notes.txt",(err,data)=>{
    if (err){
        console.log(err);
        return
    }
    console.log(data);
});
//Append file content
fs.appendFile("notes.txt","This data will append in the last",(err)=>{
    if (err){
        console.log(err);
    }
    console.log("Data is Appended Successfully")
});
//4. Delete the file Asynchronously
fs.rm("notes.txt", (err)=>{
    
})

