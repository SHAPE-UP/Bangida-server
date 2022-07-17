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
        todowork: { // todo 내용
            type: String,
            default: todoref.string
        },
        todorole: [{ // FK  //Q. 이거 왜 배열로 했나요, 아 여러 명이 담당할 수도 있어서
            //type: Array  // User의 id 배열
            type: Schema.Types.ObjectId, ref: 'User'
        }],
        done: { // todo 수행 완료 여부?
            type: Boolean,
            default: false
        },
        todoref: {  // 시뮬레이션 id 
            type: Schema.Types.ObjectId,
            ref: 'Simulation'
        }
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