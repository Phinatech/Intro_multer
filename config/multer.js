const multer = require("multer")

const  desHold = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads")
    },

    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },
});

const imageHolder = multer({
    storage:desHold
}).single("image")

module.exports = imageHolder