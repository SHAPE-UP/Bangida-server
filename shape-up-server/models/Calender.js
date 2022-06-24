const mongoose = require('mongoose');

const calenerSchema = mongoose.Schema({
    date: {      // 해당 날짜
        type: Date,
        required: true
    },
    todoList: {  // 할 일 목록(투두리스트 전체)
        type: Array
    },
    doneList: {  // 한 일 목록(투두리스트 일부)
        type: Array
    },
    feedSnack: {  // 간식 준 횟수
        type: Number,
        default: 0
    },
    doneRate: {  // 달성도
        type: Number,
        default: 0
    }
    
})

const Calender = mongoose.model('Calender', calenderSchema)

module.exports = { Calender }