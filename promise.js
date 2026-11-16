// const fetchUserData=new Promise(resolve,reject)=> {
//     let success=true;
//     setTimeout(()=>{
//         if(success){
//             resolve({id:101,username:"zishan"});
//         } else {
//             reject("failed to fetch the user data");
//         }
//     },1000);
// });
// console.log(fetchUserData);

// const Promise1=new Promise(resolve,reject)=>{
//     let success=true
//     if(success){
//         resolve({
//             id:124589,
//             username:"Ananya"
//         })
//     }else{
//         reject(new error("data not fetched"))
//     }
// })
// Promise1
// .then(response)=>{
//     console.log(response);
// })
// .catch(error)=>{
//     console.log(error,message);
// })

// const promise2=new promise((resolve,reject)=>{
//     let success=true
//     if(success){
//         resolve({
//             id:123654
//             username:"Ananya"
//         })
//     }

// })
// promise.all([promise1,promise2])
// .then(Response)=>{
//     ....console.log(Response);
// })
// .catch((error)=>){
//     ....console
// }

// // const fetchuserdata = new Promise((resolve, reject) => {
// //     let success = true;
// //     setTimeout(() => {
// //         resole(id:101, username:"Ashish"));
// //     )else{
// //         reject("failed to fetch user data");

// //     }
// // },1000);
// // }};
// // console.log(fetchuserdata);



const promise1 = new Promise((resolve, reject) => {
    let success = true
        if (success) {
            resolve({ 
                id: 101,
                username: "Ashish"
            })
        } 
        else {
            reject("failed to fetch  data");
        }   
    })
    
    promise1
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    }); 



const promise2 = new Promise((resolve, reject) => {
     let success = true
        if (success) {
            resolve({ 
                id: 101,
                username: "Ananya"
            })
        } 
        else {
            reject("failed to fetch  data");
        }   
    })
    
    promise2
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
    
    Promise.all([
        promise1,
        promise2])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error(error);
    });


Promise.allSettled([
    promise1,
    promise2])
    Promise.allSettled([
        promise1,
        promise2])
        .then((results) => {
            console.log(results);
        })
        .catch((error) => {
            console.error(error);
        });

    async function getUser(){
        const user = await fetchUserData()
        console.log(user);
    }
    getUser()