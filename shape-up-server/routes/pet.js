const express = require('express');
const { Family } = require('../models/Family');
const { Pet } = require('../models/Pet');
const router = express.Router();

// 강아지 정보 불러오기(DB): get
router.get("/getPet/:petID", (req, res) => {
  let petID = req.params.petID
  console.log(petID)
    //Family.findOne({_id: petID}, {id:0, userGroup: 0, familyCode: 0})
    //.populate("pet")
    Pet.findOne({"_id" : petID})
      .exec((err, petInfo) => {        
        if (err) return res.status(400).send(err);
        res.status(200).send({ success: true, petInfo });
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