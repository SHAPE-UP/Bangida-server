const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({ 
    itemname: { // 이름
        type: String 
    },
    price: Number, // 비용
    category: { // 분류
        type: Number,
        default: 0
    },
    term: { // 구매주기
        type: Number,
        default: 7
    },
    remarks:{ // 비고
        type:String
    }
})

const Budget = mongoose.model('Budget', budgetSchema)

module.exports = { Budget }