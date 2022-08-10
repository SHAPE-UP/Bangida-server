const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familySchema = mongoose.Schema({
    familyCode: {  // 가족 그룹 초대 코드
        type: String
    },
    residenceType:{ // 거주 형태
        type: String
    },
    pet: { // 반려견
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    },
    achieveProgress:{ // 업적 달성도
        type: Number
    },
    userGroup: [{type: Schema.Types.ObjectId, ref: 'User'}], //type: Array // 유저 목록
})

const Family = mongoose.model('Family', familySchema)

module.exports = { Family }