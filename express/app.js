// import express from 'express'
// // console.log("server is loading...");
// const app=express()
// app.get("/",(req,res)=>{
//     res.send("Welcome From Express.js")
// })
// app.listen(4000, () => {
//   console.log("Server is running on port 4000...");
// });

// })
// import express from 'express'
// import fs from 'fs'

// const app = express()
// //const data={
// username: "Ananya",
// location: "Delhi"
// // }
// const bookdata=fs.readFileSync("./data/books.json0","utf-8")
// console.log(bookdata);
// app.get("/api/v1/books",(req,res)=>{
//     try{
//         res.status(200),json({
//             status:"success",
//             data: {
//                 book:bookData
//             }
//         })
//     } catch (error) {
//         res,status(404).json({
//             status:"fail"
//             message:"Data not found"
//         })
//     }
// })
// app.get("/app/v1/books/:id,(res,res)=>{
//     res.send(req.params)
import express from "express";
import booksData from "./booksData.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome from Express.js");
});

app.get("/api/v1/books", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      books: booksData,
    },
  });
});

app.get("/api/v1/books/:id", (req, res) => {
  const book = booksData.find((book) => book.id === req.params.id);
  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Book not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      book,
    },
  });
});
app.delete("/api/v1/books/:id", (req, res) => {
  const index = booksData.findIndex((book) => book.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Book not found",
    });`q+`
  }

app.listen(4000, () => {
  console.log("Server is running on port 4000...");
});

