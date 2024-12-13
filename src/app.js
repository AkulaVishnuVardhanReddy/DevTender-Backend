const express = require("express");

const app = express();
const connectDB = require("./config/database")
const User = require("./Models/User")


app.post("/signup",async(req,res)=>{
    const user = new User({
        firstName:"Rama",
        lastName:"Devi",
        emailId:"rama@gmail.com",
        password:"rama123",
        age:50,
        gender:"Female"
    })

    try{
        await user.save();
        res.send("User saved Successfully");
    }catch(err){
        res.status(400).send("Not saved"+err.message);
    }

})

connectDB().then(()=>{
    console.log("Connected to database successfully");
    app.listen(3000,()=>{
        console.log("Server is running on 3000")
    });
})
.catch((err)=>{
    console.error(err);
})