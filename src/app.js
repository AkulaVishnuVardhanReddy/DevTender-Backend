const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("hello from the server");
})

app.use("/hello",(req,res)=>{
    res.send("hello hello");
})
app.use("/",(req,res)=>{
    res.send("Home dashBoard");
})



app.listen(3000,()=>{
    console.log("Server is running on 3000")
});