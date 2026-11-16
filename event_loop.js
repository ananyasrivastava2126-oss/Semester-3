import fs from 'fs'
setTimeout(() => {
    console.log("SetTime out");
})
fs.readFile("intro.txt", "utf8", (err, data) => {
    console.log("file data read completed");
})
fs.readFile("intro.txt", "utf8", (err, data) => {
    console.log("file data read completed");
})
setInterval(() => {
    console.log("Set Interval");
}, 1000)
 setImmediate(() => {
    console.log("Set Immediate");
})

fs.readFile("intro.txt","utf8",(err,data)=>{
    setTimeout(()=>{
        console.log("setTimeoout inside fs");
    },0)
    setImmediate(()=>{
        console.log("setImmediate inside fs")
    })
    console.log("File data read compiled");
})