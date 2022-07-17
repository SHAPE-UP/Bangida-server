const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({ 
    writer: {  // 작성한 가족
        type: Schema.Types.ObjectId,
        ref: 'Family'
    },
    itemname: { // 지출내역
        type: String 
    },
    price: Int, // 비용
    category: { // 분류
        type: Int,
        default: 0
    },
    term: { // 구매주기
        type: Int,
        default: 7
    },
    remarks:{ // 비고
        type:String
    }
})

const Budget = mongoose.model('User', budgetSchema)

module.exports = { Budget }