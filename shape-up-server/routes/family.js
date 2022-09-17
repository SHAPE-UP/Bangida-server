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

// 반려견 입양, PetID push: put
router.put("/additionPetID", (req,res) => { 
  // Pet 생성
  const newpet = new Pet()
  
  // weight, height, sex 랜덤 생성
  const randomSex = Math.floor(Math.random()*2)
  const randomWeight = Math.floor(Math.random()*3) + 2
  const randomHeight = Math.floor(Math.random()*6) + 20
  randomSex == 0 ? newputSex = true : newputSex = false

  // Pet에 값 삽입
  newpet.name = req.body.petName
  newpet.sex = newputSex
  newpet.height = randomHeight
  newpet.weight = randomWeight
  console.log(newpet)

  newpet.save((err, petInfo) => {
    Family.findOneAndUpdate({ _id: req.body.familyID }, {pet: petInfo.id})
    .exec(
      (err, petInfo) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true
        })
      }
    )
  })  
})

// Family가 갖는 petID 불러오기
router.get("/getPetID/:familyID", (req, res) => {
  let familyID = req.params.familyID
  console.log(familyID)
  Family.findOne({familyID : familyID})
  .exec((err, familyInfo) =>{
    if(err) return res.status(400).json({success: false})
    return res.status(200).json({
      success: true, petID: familyInfo.pet
    });
  });
});



module.exports = router;