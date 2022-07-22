const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalkReviewSchema = mongoose.Schema({ // 산책 리뷰마다 familyid 연결해줘야겠지
    familyId:{ // 가족 ID
        type: Number
    },
    like: { // 추천, 비추천
        type: Boolean
    },
    recode: { // 경로 기록
        //type 뭘로해..? Image?
    },
    time: { // 소요시간
        //type: TimeRanges
    },
    speed:{ // 속도
      type: Number
    },
    distance:{// 거리
      type: Number
    },
    picture:{ // 사진
      //type: Image
    },
    content: {
      type: String
    }
}, {timestamps: true})

const WalkReview = mongoose.model('WalkReview', WalkReviewSchema)

module.exports = { WalkReview }