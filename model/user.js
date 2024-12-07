const mongoose = require("mongoose");

var Userschema = mongoose.Schema({
    Name:String,
    Age:Number,
    Phone:Number,
    City:String
    
})

var userModel = mongoose.model("user",Userschema)
module.exports= userModel