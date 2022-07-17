const express = require('express');
const router = express.Router();
const { Family } = require('../models/Family');


// 가족 구성원 정보 불러오기: post
router.post("/getFamily", (req, res) => {
    Family.find({ _id: req.body._id })
      .populate({path: "userGroup", model: "User"})
      .exec((err, family) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true, family });
      });
});



module.exports = router;