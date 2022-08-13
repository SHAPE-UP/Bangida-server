const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalkreviewSchema = mongoose.Schema({
    familyID: {  // 가족 ID
        type: Schema.Types.ObjectId, ref: 'Family'
    },
    like: { // 추천, 비추천
        type: Boolean
    },
    record: { // 경로 기록
        type: String
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
    content: {
      type: String
    }
}, {timestamps: true})

const Walkreview = mongoose.model('Walkreview', WalkreviewSchema)

module.exports = { Walkreview }
