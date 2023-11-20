const express=require("express");
const { dbConnection } = require("./config/db");
const { userRouter } = require("./routes/user.route");

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("homepage")
})

app.use("/user",userRouter)


app.listen(process.env.port,async()=>{
    try{
   await dbConnection
   console.log("connected to db")
    }
    catch(e){
        console.log(e.message)
    }
    console.log(`listening port at ${process.env.port}`)
})
