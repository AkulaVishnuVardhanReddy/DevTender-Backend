const mongoose = require("mongoose");


const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://Vishnu:chintu@cluster0.hyys0.mongodb.net/DevTender");
}
module.exports = connectDB;
