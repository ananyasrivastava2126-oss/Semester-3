const fs = require("fs")
// Implement CRUD operation using Node.js 'js' module
//1. Create a file
fs.writeFileSync("notes.txt","Hello Node.js")
//2. read the content of the title 
const data=fs.readFileSync("notes.txt", "utf8")
console.log("Read Data: ",data)
//update the content of the file
fs.appendFileSync("notes.txt","Hello ECE-02")
//Delete the file
fs.rmSync("notes.txt")