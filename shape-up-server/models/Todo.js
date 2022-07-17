const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = mongoose.Schema({ 
    todowork: { // todo 내용
        type: String,
        // default: this.todoref.simName
        // simName을 가져오면 좋은데
        // populate 하기 전 상태라 이렇게 직접 참조하는 건 불가능할 듯
        // 방법: 아래에 메소드를 만들기
    },
    todorole: [{
        //type: Array  // User의 id 배열
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    todotime: {  // 시간 설정
        type: Date
    },
    todoref: {  // 시뮬레이션 id 
        type: Schema.Types.ObjectId,
        ref: 'Simulation'
    },
    done: { // todo 수행 완료 여부
        type: Boolean,
        default: false
    }  
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = { Todo }

