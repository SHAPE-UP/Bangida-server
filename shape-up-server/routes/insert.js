const express = require("express");
const router = express.Router();
const upload = require("../upload");
var multer = require("multer");

const app = express();


// Image S3에 저장
router.post("/image", upload.single("image"), (req, res) => {
    res.send("good!");
});

//record S3에 저장

router.post("/record", upload.single("file"), (req, res) => {
    res.send("good!");
});

module.exports = router;