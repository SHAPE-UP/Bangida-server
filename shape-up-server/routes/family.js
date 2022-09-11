const express = require('express');
const router = express.Router();
const { Family } = require('../models/Family');
const { Pet } = require('../models/Pet');


// 가족 구성원 정보 불러오기: post
router.post("/getFamily", (req, res) => {
    Family.findOne({ _id: req.body.familyID })
      .populate({path: "userGroup", model: "User", select: ["name", "image"]})
      .exec((err, family) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true, family });
      });
});

// 반려견 입양시 PetID push
router.put("/additionPetId", (req,res) => { 
  const newpet = new Pet()
  
  newpet.save((err, petInfo) => {
    Family.findOneAndUpdate({ _id: req.body.familyID }, {pet: petInfo.id})
    .exec(
      (err, todoInfo) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true
        })
      }
    )
  })  
})



module.exports = router;