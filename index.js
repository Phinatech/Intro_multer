const express = require("express")
const app = express();
const profileRoute = require("./router/indexRouter")
const Port = 1789
require("./config/db")
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Sever is up and running"
    })
});

app.use("/",profileRoute);
app.listen(Port,()=>{
    console.log("Server is listening 🤔🤔🤔🤗🤗")
})