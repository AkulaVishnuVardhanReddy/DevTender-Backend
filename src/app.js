const express = require("express");

const app = express();
const connectDB = require("./config/database")
const User = require("./Models/User")

app.use(express.json());

app.get("/user", async(req,res)=>{
    const userEmail = req.body.emailId;
    try{
        const users = await User.find({emailId : userEmail});
        if(users.length===0){
            res.send("No user found");
        }else{
            res.send(users);
        }
    }catch(err){
        res.status(400).send("Something went wrong"+err.message);
    }
})

app.post("/signup",async(req,res)=>{
    const user = new User(req.body)

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