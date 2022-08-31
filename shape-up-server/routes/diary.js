const express = require('express');
const router = express.Router();
const { Diary } = require('../models/Diary');
const { Todo } = require('../models/Todo');

// 날짜별 Diary 불러오기: post
// req.body: 가족ID, 날짜
router.post("/getDiary", (req, res) => {
    
    let date = req.body.date // YYYY-MM-DD 형식
    let date_str = date+" 12:00:00";
    var date_timestamp = new Date(date_str);

    Diary.findOne({ familyID: req.body.familyID,
        date: date_timestamp 
    })
    .exec((err, diary) => {
            if(err) return res.status(400).json({ success: false, err })
            return res.status(200).json({ success: true, diary })
        }
    )
})



module.exports = router;