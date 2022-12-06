const express = require ("express");
const uploader = require("../config/multer");
const router = express.Router();

const { getAllData, newProfile } = require("../controller/index.Controller")

router.route("/newData").post(uploader,newProfile);
router.route("/newData").get(getAllData);

module.exports = router;