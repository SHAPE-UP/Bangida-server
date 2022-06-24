const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    todowork: {
        type: String,
        default: todoref.string
    },
    todorole: {
        type: Array  // User의 id 배열
    },
    todosetting: {

    },
    todoref: {  // 시뮬레이션 id
        type: Schema.Types.ObjectId,
        ref: 'Simulation'
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }