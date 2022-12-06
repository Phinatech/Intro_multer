const profileModel = require("../model/indexModel")

const newProfile = async(req,res)=>{
    try {
      const {name,bio,image} = req.body
      const creatingProfile = await profileModel.create({
        name,
        bio,
        image:req.file.path,
      }) 
      res.status(201).json({
        message:"Profile created",
        data:creatingProfile
      })
      
    } catch (error) {
        res.status(404).json({
            meessage:"An error occured",
            data:error
        })
    }
}

const getAllData = async(req,res)=>{
    try {
        const getData = await profileModel.find()
        res.return(200).json({
            meessage:"Profile Data gotten",
            data:getData
        })
    } catch (error) {
         res.status(404).json({
           meessage: "An error occured",
           data: error,
         });
    }
}

module.exports= {newProfile,getAllData}