const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
    itemname: {
        type: String
    },
    price: Int,
    category: {
        type: Int,
        default: 0
    },
    term: {
        type: Int,
        default: 7
    }

})

const Budget = mongoose.model('User', BudgetSchema)

module.exports = { Budget }