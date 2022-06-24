const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    string: {  // 시뮬레이션 이름
        type: String,
    },
    gotoSim: {  // 시뮬레이션 액티비티로 이동하기 위한 정보
        type: String
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }