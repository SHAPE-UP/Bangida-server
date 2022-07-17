const express = require('express');
const router = express.Router();
const { WalkReview } = require('../models/WalkReview');


// 최근(date) 산책 리뷰 목록 불러오기: post

// 산책 리뷰 등록(걷기 기록, 산책 경로, 작성 내용): post

// 산책 리뷰 내용 수정: post

// detail: 산책 리뷰 댓글 목록 불러오기: post

// detail: 산책 리뷰 댓글 작성: post

// detail: 산책 리뷰 댓글 삭제: delete

// detail: 산책 리뷰 자세히: post

// 장소 마커 등록: post

// 장소 마커 불러오기: post

// 장소 마커 삭제하기: delete



module.exports = router;