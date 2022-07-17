const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = mongoose.Schema({ 
    familyID:{ // 가족 ID
        type: Schema.Types.ObjectId, ref: 'Family'
    },
    todowork: { // todo 내용
        type: String,
        default: todoref.string
    },
    todorole: [{ // FK  //Q. 이거 왜 배열로 했나요, 아 여러 명이 담당할 수도 있어서
        //type: Array  // User의 id 배열
        type: Schema.Types.ObjectId, ref: 'User', //배열로 한다면
    }],
    
    todosetting: { // todo 수행 완료 여부?
        type: Boolean
    },
    todoref: {  // 시뮬레이션 id 
        type: Schema.Types.ObjectId,
        ref: 'Simulation'
    },
    date: { 
        type: Date,
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = { Todo }