import fs from "fs"

//create the directory
fs.mkdir("./myfolder1/myfolder2/myfolder3",{recirsive: tru}(err)=>{ 
    if(err){
        console.log(err);
            return
        
    }
    console.log("Directory created successfully");
    fs.writenFile("script.js","Hello",(err)=>{
        if(err){
            console.log(err);
        return
        }
        console.log("file created successfully");
        fs.writenFile("./myfolder/script.js","Hello",(err)=>{
            if (err){
                console.log(err);
                return
            }
        })

    
})
fs.readdir("./myfolder",(err,files)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("file: ","files");
})