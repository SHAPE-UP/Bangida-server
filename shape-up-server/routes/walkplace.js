const express = require('express');
const router = express.Router();
const { walkPlace } = require('../models/walkPlace');


// 장소 마커 등록: post
router.post('/addPlace', (req, res) =>{
  const place = new walkPlace(req.body)
  place.save((err, placeInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  }) 
})

// 장소 마커 불러오기: post
router.post("/getPlace", (req, res) => {
  WalkReview.find({ familyId: req.body.familyId })
  .exec((err, place)=>{
    if(err) return res.status(400).send(err);
    return res.status(200).json({success: true, place})
  })
})

// 장소 마커 삭제하기: delete
router.delete("/deletePlace", (req,res)=>{
  Comment.deleteOne({_id: {$in: req.body._id}}, (err, commentInfo)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

module.exports = router;