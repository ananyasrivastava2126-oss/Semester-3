// function sizeChecker(){

//     function sizeChecker(filename){
//         const stats= fs.statSync(filename);
//         const limit=2*1024*1024 //2mb

//         //check the file size
//         if(stats.size>limit){
//             console.log("File should be less than 2mb");
//     }
//     else 
//         console.log("file has been submitted successfully");
// }
// }
// const sizeChecker =("notes.txt")=>{

// }
// //IIFE
// {
//     ()=>{
//         console.log("Hello")
//     }
// }()
//Higher order function
//Create a list of numbers
const nums=[1,2,3,4]
nums.map(num,index)=>{
    console.log("Numbers $(index=0):$(num*2)");
})
nums.filter((num,index)=>{
    if(num>2){
        console.log(num);
    }
})
