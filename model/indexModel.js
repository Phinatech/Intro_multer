const mongoose = require("mongoose")

const profile = mongoose.Schema({
    name:{
type:String,
required:true
    },
    image:{
type:String
    },
    bio:{
type:String
    },
})

const profileModel = mongoose.model("myProfile",profile)

module.exports= profileModel