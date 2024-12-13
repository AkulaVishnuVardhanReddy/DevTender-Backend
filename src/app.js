const express = require("express");

const app = express();

app.get("/user/:userid/:name/:password",(req,res)=>{
    res.send(req.params);
})


app.get("/user",(req,res)=>{
    res.send(req.query);
})


app.listen(3000,()=>{
    console.log("Server is running on 3000")
});