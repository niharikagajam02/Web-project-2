const express=require('express')
const app=express()
const port=8080
const users=[
    {
        "id":"1",
        "name":"john",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/18.jpg",
    },

    {
        "id":"2",
        "name":"amber",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/43.jpg",
    },

    {
        "id":"3",
        "name":"lily",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/26.jpg",
    },

    {
        "id":"4",
        "name":"juan",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/88.jpg",
    },

    {
        "id":"5",
        "name":"valtteri rantala",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/5.jpg",
    },

]
 
//my 1st apii
app.get("/api/users", function(req, res)
{
res.status(200).json(users);
})

//random user
app.get("/api/randomuser",function(req,res)
{
    var n=users.length;
    const randomid=Math.floor(Math.random()*n);
    res.status(200).json(users[randomid])
}

)




function getUserById(uid){
    for(var i=0;i<users.length;i++)
    {
        if(uid==users[i].id)
            return i;
    }
    return -1;
}


app.get("/api/users/:id", function(req, res)
{
 var uid = req.params.id;
 var userid = getUserById(uid);


 if(userid == -1)
 {
   res.status(404).json({"message" : "user not found"})
 }
 res.status(200).json(users[userid])
})


app.use(express.static("frontend"))
app.listen(port, function(){
    console.log("my app is running at http://localhost:"+port)
}
)