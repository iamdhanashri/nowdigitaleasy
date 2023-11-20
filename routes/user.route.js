
const express=require("express")
const { UserModel } = require("../model/user.model")

const userRouter=express.Router()


// post user

userRouter.post("/register",async(req,res)=>{
    const user=new UserModel(req.body)
    await user.save()
    res.send({"msg":"User created successfully"}) 
})

// get all users

userRouter.get("/",async(req,res)=>{
    const user= await UserModel.find()
    if(user.length>0){
    res.status(200).send(user)  
    }
    else{
    res.send({"msg":"User not found"}) 

    }
})


 // get user by Id 

 userRouter.get("/:id",async(req,res)=>{
    const id =req.params.id
    const user =await UserModel.findOne({_id:id})
    res.status(200).send(user)
})


// delete user by Id

userRouter.delete("/delete/:id",async(req,res)=>{
    const userID=req.params.id
    await UserModel.findByIdAndDelete({_id:userID}) 
    res.send({"msg":`User with id:${userID} has been deleted`})
 })


 //update user by Id

 userRouter.put("/update/:id",async(req,res)=>{
    const userID=req.params.id
    // console.log(userID)
    await UserModel.findByIdAndUpdate({_id:userID},req.body) 
    res.send({"msg":`User with id:${userID} has been updated`})
 })



module.exports={
    userRouter
}
