import http from 'http'
import fs from 'fs'
const.data=fs.readFileSync("./[pageNotFound.html")
const server = http.createServer((req,res)=>{
// res.end("welcome from server")
if(req.url=== "/"){
    res.end("home page")
}else if (req.url === "/contact"){
    res.end("contact page")
}else if (req.url === "/projects"){
    res.end("project page")
}
})

server.listen(3000,()=>{
    console.log("Server is running...")
    if(req.url==="/"{
        res.writeHead(200,{
            "content.type":"text/plain"
        })
        res.end("Home Page")
    }else if(req.url==="/"){

    })
})