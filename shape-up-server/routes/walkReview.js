const express = require('express');
const router = express.Router();
const { WalkReview } = require('../models/WalkReview');


// 최근(date) 산책 리뷰 목록 불러오기: post
router.post("/getReview", (req, res) => {
  WalkReview.find({ familyId: req.body.familyId })
  .sort({createdAt: -1}) 
  .limit(5)
  .exec((err, review)=>{
    if(err) return res.status(400).send(err);
    return res.status(200).json({success: true, review})
  })
})

// 산책 리뷰 등록(걷기 기록, 산책 경로, 작성 내용): post
router.post("/addReview",(req, res) => {
  const post = new WalkReview(req.body)
  post.save((err, postInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  }) 
})

// 산책 리뷰 내용 수정: put
router.put("/editReview", (req,res) => {
  WalkReview.updateOne({ _id: req.body._id }, {$set: {like: req.body.like, content: req.body.content}}, (err, commentInfo) =>{
    console.log(req.body.like, req.body.content)
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success:true
    })
  })
})

// detail: 산책 리뷰 자세히: post
router.post("/getDetailReview", (req, res) => {
  WalkReview.findOne({ _id: req.body._id },  (err, reviewInfo)=>{ 
    if(err) return res.status(400).send(err)
    return res.status(200).json({
      success: true, reviewInfo
    })
  })
})

// 산책 리뷰 삭제: 넣어?



module.exports = router;