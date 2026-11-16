import fs from 'fs'
import http from 'http'

const server = http.createServer((req,res)=>{
    if(req.method==="GET"&&req.url==='/'){
        res.end("home page")
    }
})