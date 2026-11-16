function getuser(id,callback){
    setTimeout(()=>{
        console.log("user fetched");
        cont user ={
            id:1;
            username: "John Doe"
        }
        callback(null,user)
    },100)
}

function getprofile(id,callback){
    setTimeout(()=>{
        console.log("profile fetched");
        cont user ={
            id:1;
            username: "John Doe"
        }
        callback(null,profile)
    },1000)
}

function getPosts(username,callback){
    setTimeout(()=>{
        console.log("Posts fetched");
        cont Posts ={"post1","post2","post3"]
           callback(null,posts)
        },1000)
    }

    getuser(1,function(error,user){
        if(error){
            console,error(error);
            return
        }
        getPosts(profile.username,function(error,posts){
            if(error){
                console.error(error);
                return;
            }
            console.log('posts fetched $(posts)');
        })
    })