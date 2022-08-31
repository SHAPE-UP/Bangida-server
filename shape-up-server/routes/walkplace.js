const express = require('express');
const router = express.Router();
const { Walkplace } = require('../models/Walkplace');


// 장소 마커 등록: post
router.post('/addPlace', (req, res) =>{
  const place = new Walkplace(req.body)
  place.save((err, placeInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  }) 
})

// 장소 마커 불러오기: post
router.post("/getPlace", (req, res) => {
  Walkplace.find({ familyID: req.body.familyID })
  .exec((err, place)=>{
    if(err) return res.status(400).send(err);
    return res.status(200).json({success: true, place})
  })
})

// 장소 마커 삭제하기: delete
router.delete("/deletePlace", (req,res)=>{
  Walkplace.deleteOne({_id: {$in: req.body._id}}, (err, place)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

module.exports = router;