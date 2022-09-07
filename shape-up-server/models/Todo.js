const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = mongoose.Schema({ 
    familyID: {  // 가족 ID
        type: Schema.Types.ObjectId,
        ref: 'Family',
        required: true
    },
    date: {  // 날짜
        type: Date,
        required: true
    },
    todowork: { // 할 일 내용 (텍스트)
        type: String,
        required: true
        // 관련 시뮬레이션(이름)을 가져오면 좋은데
        // 방법: 아래에 메소드를 만들기
    },
    todorole: {  // 역할 분담
        type: Schema.Types.ObjectId, 
        ref: 'User',
        default: null
    },
    todotime: {  // 시간 설정 (푸시 알림)
        type: String,
        default: null
    },
    todoref: {  // 관련 시뮬레이션 - 번호로 관리
        type: Number
    },
    done: { // 수행 완료 여부
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = { Todo }

