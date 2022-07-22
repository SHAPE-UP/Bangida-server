const express = require('express');
const router = express.Router();
const { Comment } = require('../models/Comment');


// 산책 리뷰 댓글 목록 불러오기: post
router.post("/getComment", (req, res) => {
  Comment.find({ walkReviewID: req.body.walkReviewID }) 
  .exec((err, review)=>{
    if(err) return res.status(400).send(err);
    return res.status(200).json({success: true, review})
  })
})

// 산책 리뷰 댓글 작성: post
router.post("/addComment",(req, res) => {
  const comment = new Comment(req.body)
  comment.save((err, commentInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  }) 
})

// 산책 리뷰 댓글 수정: put
router.put("/editComment", (req,res) => {
  Comment.updateOne({ _id: req.body._id }, {$set: {content: req.body.content}}, (err, commentInfo) =>{
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success:true
    })
  })
})

// 산책 리뷰 댓글 삭제: delete
router.delete("/deleteComment", (req,res)=>{
  Comment.deleteOne({_id: {$in: req.body._id}}, (err, commentInfo)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

module.exports = router;