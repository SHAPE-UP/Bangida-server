const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const simSchema = mongoose.Schema({
    simName: {  // 시뮬레이션 이름
        type: String,
    },
    gotoSim: {  // 시뮬레이션 액티비티로 이동하기 위한 정보
        type: String
    }
})

const Simulation = mongoose.model('Simulation', simSchema)

module.exports = { Simulation }