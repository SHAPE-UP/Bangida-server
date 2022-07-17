const express = require('express');
const { Family } = require('../models/Family');
const router = express.Router();

// 강아지 정보 불러오기(DB): post
router.post("/getPet", (req, res) => {
    Family.find({ _id: req.body._id })
      .populate("pet")
      .exec((err, family) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send({ success: true, family });
      });
});
  


// 기분 변화: post

// 건강 상태 변화: post

// 위생 상태 변화: post

// 간식 섭취 횟수 증가: post

// 물 섭취 횟수 증가: post

// 사료 섭취 횟수 증가: post

// 산책 횟수 증가: post


module.exports = router;