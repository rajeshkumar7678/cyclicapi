const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String
})

const userMOdel=mongoose.model("userdetail",userSchema)

module.exports={userMOdel}