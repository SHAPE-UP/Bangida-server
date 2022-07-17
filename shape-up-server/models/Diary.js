const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diarySchema = mongoose.Schema({ 
    familyID:{ // 가족 ID
        type: Schema.Types.ObjectId, ref: 'Family'
    },
    date: {  // 날짜
        type: Date
    },
    todolist: [{
        type: Schema.Types.ObjectId, ref: 'Todo'
    }],
    feedSnack: { // 간식 준 횟수
        type: Number,
        default: 0
    },
    doneRate: {  // 달성도
        type: Number,
        default: 0
    },
})

const Diary = mongoose.model('Diary', diarySchema)
module.exports = { Diary }