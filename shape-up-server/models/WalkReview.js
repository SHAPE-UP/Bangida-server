const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalkReviewSchema = mongoose.Schema({ // 산책 리뷰마다 familyid 연결해줘야겠지
    like: { // 추천, 비추천
        type: Boolean
    },
    recode: { // 경로 기록
        //type 뭘로해..? Image?
    },
    time: { // 소요시간
        type: Boolean
    },
    speed:{ // 속도
      type: Number
    },
    picture:{ // 사진
      //type: Image
    },
    date:{ // 기록 날짜
      type: Date
    },
    walkingId:{ // 산책로 id
      type: Number
    }
})

const WalkReview = mongoose.model('WalkReview', WalkReviewSchema)

module.exports = { WalkReview }