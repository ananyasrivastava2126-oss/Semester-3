import fs from ('fs')
const fs = require('fs')
// readable stream
const readstream = fs.createStream("inro.txt",{encoding:"utf8",highWaterMark:10})

readstream.on("data",(chunk)=>{
    console.log("Data received")
    console.log("Data: ", chunk);
})
// writeable stream
const writeStream=fs.createWriteStream("output.txt")
writeStream.write("Hello")