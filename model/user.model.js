
const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name: String,
    role:String,
    email: String,
    phoneNumber: Number

})

const UserModel=mongoose.model("    ",userSchema)

module.exports={
    UserModel
}