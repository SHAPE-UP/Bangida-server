const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = mongoose.Schema({ 
    name: { // 이름
        type: String,
        maxlength: 50
    },
    sex: Boolean, // 성별
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    breed:{
        type: Schema.Types.ObjectId, ref: 'Dog'
    },
    // 상태
    
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = { Pet }