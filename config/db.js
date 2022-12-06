const mongoose = require("mongoose")

const MongoURI = "mongodb://localhost/store"

mongoose.connect(MongoURI)
mongoose.connection
.on("open",()=>{
    console.log("Database is connected")
}).once("error",()=>{
    console.log("An error occured while getting data")
})