import fs from 'fs'
// fs.stat("notes.txt",(err,stats)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("information of[notes.txt]", stats) 
//     console.log("size of the file",stats.size)
//     console.log("creation time of the file",stats.birthtime.toISOstring().split("T")[0])
//     console.log("modification  of the file",stats.mtime.toISOstring())
//     console.log("access time  of the file",stats.toISOstring())
//     console.log("change time of the file",stats.mtime.toISOstring())
//      console.log("Is this a file",stats.isFile())
//      console.log("Is this a directory",stats.isDirectory())
    
//     })
    fs.stat("./myfolder1" (error, stats)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(stats.size);
    })

