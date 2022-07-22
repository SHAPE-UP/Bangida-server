const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = mongoose.Schema({ 
    familyID: {  // 작성한 가족
        type: Schema.Types.ObjectId,
        ref: 'Family'
    },
    itemname: { // 지출내역
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