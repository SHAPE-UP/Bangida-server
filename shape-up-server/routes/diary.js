const express = require('express');
const router = express.Router();
const { Diary } = require('../models/Diary');
const { Todo } = require('../models/Todo');

// 날짜별 투두리스트 불러오기: post
// req.body: 가족ID, 날짜

// todo 등록: post

// todo 내용 수정: post

// todo 삭제: delete

// todo 알림 설정: post

// todo 완료(할일 -> 할일 완료): post

module.exports = router;